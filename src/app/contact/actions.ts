'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    // This part of the code could be improved to give more specific errors
    // but for now, a generic message is fine.
    const errorMessage = parsed.error.issues.map(issue => issue.message).join(', ');
    return { success: false, message: `Invalid form data: ${errorMessage}` };
  }

  const { name, email, subject, message } = parsed.data;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Query from Wiki Science Website: ${subject}`,
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
