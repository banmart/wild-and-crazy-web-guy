export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../data/site';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set.');
    return new Response(
      JSON.stringify({ error: 'Email service is not configured. Missing RESEND_API_KEY in environment.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const contentType = request.headers.get('content-type') || '';
    let name = '';
    let business = '';
    let email = '';
    let website = '';
    let act = '';
    let message = '';
    let honeypot = '';
    let isJson = false;

    if (contentType.includes('application/json')) {
      isJson = true;
      const body = await request.json();
      name = body.name?.trim() || '';
      business = body.business?.trim() || '';
      email = body.email?.trim() || '';
      website = body.website?.trim() || '';
      act = body.act?.trim() || '';
      message = body.message?.trim() || '';
      honeypot = body._honey?.trim() || '';
    } else {
      const formData = await request.formData();
      name = (formData.get('name') as string)?.trim() || '';
      business = (formData.get('business') as string)?.trim() || '';
      email = (formData.get('email') as string)?.trim() || '';
      website = (formData.get('website') as string)?.trim() || '';
      act = (formData.get('act') as string)?.trim() || '';
      message = (formData.get('message') as string)?.trim() || '';
      honeypot = (formData.get('_honey') as string)?.trim() || '';
    }

    // Bot detection via honeypot
    if (honeypot) {
      if (isJson) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return redirect('/thanks/', 303);
    }

    // Validation
    if (!name || !email || !message) {
      const errorMsg = 'Please fill in all required fields (name, email, message).';
      if (isJson) {
        return new Response(JSON.stringify({ error: errorMsg }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(errorMsg, { status: 400 });
    }

    const fromEmail =
      import.meta.env.RESEND_FROM_EMAIL ||
      process.env.RESEND_FROM_EMAIL ||
      'Wild & Crazy SEO <onboarding@resend.dev>';
    const toEmail =
      import.meta.env.RESEND_TO_EMAIL ||
      process.env.RESEND_TO_EMAIL ||
      site.formEmail ||
      'banmart@gmail.com';

    const emailSubject = `New Booking Request from ${name}${business ? ` (${business})` : ''}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #1a1a1a; background-color: #faf7f0; color: #1a1a1a;">
        <h2 style="margin-top: 0; color: #1a1a1a; border-bottom: 2px solid #e5e0d3; padding-bottom: 12px; font-size: 20px;">
          🎟️ New Booking Request, Wild &amp; Crazy SEO
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 130px; color: #666;">Name:</td>
            <td style="padding: 8px 0; color: #111;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #666;">Business:</td>
            <td style="padding: 8px 0; color: #111;">${escapeHtml(business || 'None provided')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
            <td style="padding: 8px 0; color: #111;"><a href="mailto:${escapeHtml(email)}" style="color: #c9382b;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #666;">Website:</td>
            <td style="padding: 8px 0; color: #111;">${website ? `<a href="${escapeHtml(website)}" target="_blank" style="color: #c9382b;">${escapeHtml(website)}</a>` : '<em>None provided</em>'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #666;">Interested Act:</td>
            <td style="padding: 8px 0; color: #111;"><strong>${escapeHtml(act || 'Not specified')}</strong></td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border-left: 4px solid #c9382b; border-radius: 4px;">
          <strong style="color: #1a1a1a; display: block; margin-bottom: 8px; font-size: 14px;">What's going on:</strong>
          <p style="margin: 0; white-space: pre-wrap; color: #333; line-height: 1.5; font-size: 14px;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    const textContent = `
New Booking Request, Wild & Crazy SEO
-------------------------------------
Name: ${name}
Business: ${business || 'None provided'}
Email: ${email}
Website: ${website || 'None provided'}
Act: ${act || 'Not specified'}

Message:
${message}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend delivery error:', error);
      if (isJson) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(`Error sending message: ${error.message}`, { status: 500 });
    }

    if (isJson) {
      return new Response(JSON.stringify({ success: true, id: data?.id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return redirect('/thanks/', 303);
  } catch (err: any) {
    console.error('Unexpected error processing /api/contact:', err);
    return new Response(
      JSON.stringify({ error: err?.message || 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
