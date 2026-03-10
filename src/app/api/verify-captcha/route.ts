// ─────────────────────────────────────────────────────────────
//  app/api/verify-captcha/route.ts
//
//  Standalone reCAPTCHA v2 verifier — completely independent
//  of EmailJS. Called by the form BEFORE EmailJS sends anything.
//
//  .env.local:
//    RECAPTCHA_SECRET_KEY=your_secret_key   ← never expose this
// ─────────────────────────────────────────────────────────────
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Missing token' },
        { status: 400 }
      );
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error('[verify-captcha] RECAPTCHA_SECRET_KEY not set');
      return NextResponse.json(
        { success: false, error: 'Server misconfiguration' },
        { status: 500 }
      );
    }

    // Call Google's verification endpoint
    const googleRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret, response: token }),
      }
    );

    const googleData = await googleRes.json();

    if (googleData.success) {
      return NextResponse.json({ success: true });
    }

    console.warn('[verify-captcha] Failed:', googleData['error-codes']);
    return NextResponse.json(
      { success: false, error: 'reCAPTCHA check failed' },
      { status: 400 }
    );
  } catch (err) {
    console.error('[verify-captcha] Server error:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}