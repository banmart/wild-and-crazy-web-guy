export const prerender = false;

import type { APIRoute } from 'astro';
import { getMany, increment, isValidSlug } from '../../lib/views';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      // Counts change constantly and are fetched client-side, so never cache.
      'Cache-Control': 'no-store',
    },
  });

/** GET /api/views?slugs=a,b,c to read totals without counting a visit. */
export const GET: APIRoute = async ({ url }) => {
  const slugs = (url.searchParams.get('slugs') ?? '').split(',').filter(isValidSlug);

  try {
    return json({ views: await getMany(slugs) });
  } catch (err) {
    console.error('[views] read failed:', err);
    return json({ views: {} }, 500);
  }
};

/** POST /api/views with body { slug } to count one visit and return the new total. */
export const POST: APIRoute = async ({ request }) => {
  let slug: unknown;

  try {
    ({ slug } = await request.json());
  } catch {
    return json({ error: 'Expected a JSON body.' }, 400);
  }

  if (typeof slug !== 'string' || !isValidSlug(slug)) {
    return json({ error: 'Invalid slug.' }, 400);
  }

  try {
    return json({ views: await increment(slug) });
  } catch (err) {
    console.error('[views] increment failed:', err);
    return json({ error: 'Could not record view.' }, 500);
  }
};
