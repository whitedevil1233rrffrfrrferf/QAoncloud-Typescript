// app/api/career/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';   // required for nodemailer + Buffer

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get('firstName') as string;
    const lastName  = formData.get('lastName')  as string;
    const email     = formData.get('email')     as string;
    const phone     = formData.get('phone')     as string;
    const file      = formData.get('resume')    as File | null;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ── Build attachment ──────────────────────────────────────────────
    const attachments: nodemailer.SendMailOptions['attachments'] = [];

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename:    file.name,
        content:     buffer,
        contentType: file.type || 'application/octet-stream',
      });
    }

    // ── Transporter ──────────────────────────────────────────────────
    // Uses env vars — set these in .env.local:
    //   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CAREER_TO_EMAIL
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fullName = `${firstName} ${lastName}`;

    // ── 1. Notify QAonCloud team ─────────────────────────────────────
    await transporter.sendMail({
      from:        `"QAonCloud Careers" <${process.env.SMTP_USER}>`,
      to:          process.env.CAREER_TO_EMAIL || 'contactus@qaoncloud.com',
      replyTo:     email,
      subject:     `New Career Application — ${fullName}`,
      text: `A new career application has been submitted through the QAonCloud website.

First Name : ${firstName}
Last Name  : ${lastName}
Email      : ${email}
Phone      : ${phone}
Resume     : ${file ? `${file.name} (${(file.size / 1024).toFixed(1)} KB) — attached` : 'Not provided'}

Please review the candidate's profile and resume for further recruitment processing.

Regards,
QAonCloud Website Notification System`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#002A8D;margin-bottom:16px;">New Career Application</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;color:#555;width:120px;">First Name</td><td style="padding:8px 0;">${firstName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555;">Last Name</td><td style="padding:8px 0;">${lastName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#555;">Resume</td><td style="padding:8px 0;">${file ? `${file.name} — <strong>see attachment</strong>` : 'Not provided'}</td></tr>
          </table>
          <p style="margin-top:24px;color:#888;font-size:13px;">Sent via QAonCloud Website</p>
        </div>`,
      attachments,
    });

    // ── 2. Confirmation to applicant ─────────────────────────────────
    await transporter.sendMail({
      from:    `"QAonCloud" <${process.env.SMTP_USER}>`,
      to:      email,
      replyTo: 'contactus@qaoncloud.com',
      subject: `We received your application, ${firstName}!`,
      text: `Hi ${firstName},

Thank you for applying to QAonCloud! We've received your application and will review your resume shortly. We'll be in touch soon.

Regards,
QAonCloud Team`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#002A8D;">Thanks for applying, ${firstName}!</h2>
          <p style="color:#333;line-height:1.6;">We've received your application and will review your resume shortly. We'll be in touch soon.</p>
          <p style="color:#888;font-size:13px;margin-top:32px;">— QAonCloud Team</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });

  } catch (err: unknown) {
    console.error('Career route error:', err);
    return NextResponse.json(
      { error: 'Failed to send. Please try again.' },
      { status: 500 }
    );
  }
}