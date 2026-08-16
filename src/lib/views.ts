/**
 * View counter storage.
 *
 * Two backends, chosen at runtime:
 *
 *   1. Upstash Redis, when UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
 *      are set. Talks to the REST API over plain fetch, so there is no npm
 *      dependency to install. INCR is atomic, so concurrent readers cannot
 *      clobber each other.
 *
 *   2. A local JSON file, used only when Upstash is not configured. This exists
 *      so `astro dev` works with no accounts set up. It CANNOT be used in
 *      production: Vercel gives serverless functions a read-only filesystem, so
 *      the write throws EROFS, and /tmp is per-instance and cleared on cold
 *      start. Without Upstash configured, production reports zeros rather than
 *      pretending to count.
 */

const UPSTASH_URL = import.meta.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN =
  import.meta.env.UPSTASH_REDIS_REST_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const KEY_PREFIX = 'views:';

export const isConfigured = Boolean(UPSTASH_URL && UPSTASH_TOKEN);

/** Slugs are used to build Redis keys and a file path, so keep them boring. */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9][a-z0-9-]{0,99}$/.test(slug);
}

async function upstash(command: (string | number)[]): Promise<unknown> {
  const res = await fetch(UPSTASH_URL!, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  });

  if (!res.ok) {
    throw new Error(`Upstash ${res.status}: ${await res.text()}`);
  }

  const { result } = (await res.json()) as { result: unknown };
  return result;
}

// ---- local dev fallback -----------------------------------------------------

const LOCAL_FILE = new URL('../../.views.local.json', import.meta.url);

async function readLocal(): Promise<Record<string, number>> {
  try {
    const { readFile } = await import('node:fs/promises');
    return JSON.parse(await readFile(LOCAL_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

async function writeLocal(data: Record<string, number>): Promise<void> {
  const { writeFile } = await import('node:fs/promises');
  await writeFile(LOCAL_FILE, JSON.stringify(data, null, 2));
}

let warned = false;
function warnOnce(): void {
  if (warned) return;
  warned = true;
  console.warn(
    '[views] Upstash is not configured, so view counts are stored in a local JSON file. ' +
      'This works in dev only. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN for production.'
  );
}

// ---- public API -------------------------------------------------------------

/** Increment one post and return its new total. */
export async function increment(slug: string): Promise<number> {
  if (isConfigured) {
    return Number(await upstash(['INCR', KEY_PREFIX + slug]));
  }

  warnOnce();
  const data = await readLocal();
  data[slug] = (data[slug] ?? 0) + 1;
  await writeLocal(data);
  return data[slug];
}

/** Read totals for many posts at once. Missing posts come back as 0. */
export async function getMany(slugs: string[]): Promise<Record<string, number>> {
  if (slugs.length === 0) return {};

  if (isConfigured) {
    const results = (await upstash(['MGET', ...slugs.map((s) => KEY_PREFIX + s)])) as (
      | string
      | null
    )[];
    return Object.fromEntries(slugs.map((slug, i) => [slug, Number(results[i]) || 0]));
  }

  warnOnce();
  const data = await readLocal();
  return Object.fromEntries(slugs.map((slug) => [slug, data[slug] ?? 0]));
}
