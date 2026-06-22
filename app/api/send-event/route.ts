import { SMTPClient } from 'emailjs';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log('📩 Incoming event data:', data);

    const client = new SMTPClient({
      user: 'resend',
      password: process.env.RESEND_SMTP_KEY || 're_GZ7fReR8_4U23geBgDk2DzQTyXtcvLEcu',
      host: 'smtp.resend.com',
      port: 465,
      ssl: true,
    });

    const safe = (v: any) => (v ? String(v) : 'N/A');

    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background:#f9fafb; padding:20px; }
        .container { max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #eee; }
        .header { background:linear-gradient(135deg,#ec4899,#be185d); color:#fff; padding:24px; text-align:center; }
        .content { padding:24px; }
        .row { margin-bottom:10px; font-size:14px; }
        .label { font-weight:600; color:#6b7280; }
        .value { color:#111827; }
        .box { background:#fff1f2; padding:12px; border-left:4px solid #ec4899; border-radius:6px; margin-top:8px; }
        .footer { text-align:center; padding:16px; font-size:12px; color:#9ca3af; }
      </style>
    </head>

    <body>
      <div class="container">

        <div class="header">
          <h2>New Event Submission</h2>
          <p>Tysum Global Events</p>
        </div>

        <div class="content">

          <div class="row"><span class="label">Event Title:</span> ${safe(data.title)}</div>
          <div class="row"><span class="label">Category:</span> ${safe(data.category)}</div>
          <div class="row"><span class="label">Date:</span> ${safe(data.date)}</div>
          <div class="row"><span class="label">Time:</span> ${safe(data.time)}</div>

          <div class="row"><span class="label">Location:</span> ${safe(data.location)}</div>
          <div class="row"><span class="label">City:</span> ${safe(data.city)}</div>
          <div class="row"><span class="label">State:</span> ${safe(data.state)}</div>
          <div class="row"><span class="label">Zip Code:</span> ${safe(data.zipCode)}</div>

          <div class="row"><span class="label">Capacity:</span> ${safe(data.capacity)}</div>
          <div class="row"><span class="label">Ticket Price:</span> ${safe(data.ticketPrice)}</div>
          <div class="row"><span class="label">Tags:</span> ${safe(data.tags)}</div>

          <hr />

          <div class="row"><span class="label">Contact Name:</span> ${safe(data.contactName)}</div>
          <div class="row"><span class="label">Contact Email:</span> ${safe(data.contactEmail)}</div>
          <div class="row"><span class="label">Contact Phone:</span> ${safe(data.contactPhone)}</div>

          <hr />

          <div class="row">
            <span class="label">Event Description:</span>
            <div class="box">${safe(data.description).replace(/\n/g, '<br>')}</div>
          </div>

        </div>

        <div class="footer">
          © 2026 Tysum Global Events
        </div>

      </div>
    </body>
    </html>
    `;

    await client.sendAsync({
      text: `New Event: ${data.title || 'Untitled'} by ${data.contactName || 'Unknown'} (${data.contactEmail || 'No email'})`,
      from: 'Tysum Events <onboarding@resend.dev>',
      to: 'kimanidan585@gmail.com',
      subject: `✨ New Event: ${data.title || 'Untitled'} - ${data.category || 'Event'}`,
      attachment: [
        {
          data: htmlTemplate,
          alternative: true,
        },
      ],
    });

    client.smtp.close();

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200 }
    );

  } catch (err: any) {
    console.error('❌ Email API Error:', err);

    return new Response(
      JSON.stringify({
        success: false,
        message: err?.message || 'Failed to send email',
      }),
      { status: 500 }
    );
  }
}