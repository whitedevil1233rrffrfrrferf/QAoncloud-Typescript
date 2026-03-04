import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, formData, file } = body;

    // Validate required fields
    if (!formData || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let emailContent = '';
    let subject = '';

    if (type === 'business') {
      subject = `New Business Inquiry: ${formData.company || 'Unknown Company'}`;
      emailContent = `
        <h2>New Business Inquiry</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.workEmail}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Country:</strong> ${formData.country || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not provided'}</p>
        <p><strong>How they heard about us:</strong> ${formData.howHeard || 'Not provided'}</p>
        <p><strong>Budget Range:</strong> ${formData.budgetRange || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message || 'No message provided'}</p>
      `;
    } else if (type === 'career') {
      subject = `New Career Application: ${formData.firstName} ${formData.lastName}`;
      emailContent = `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Job Role:</strong> ${formData.jobRole || 'Not provided'}</p>
        <p><strong>Location:</strong> ${formData.location || 'Not provided'}</p>
        <p><strong>Resume:</strong> ${file ? `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)` : 'No file uploaded'}</p>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend test domain
      to: ['sasikumar@qaoncloud.com'], // Match from domain for validation
      // cc: ['varun@qaoncloud.com', 'sasikumar@qaoncloud.com'], // Commented out for testing
      subject: subject,
      html: emailContent,
      replyTo: type === 'business' ? formData.workEmail : formData.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
