import { NextRequest } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFile } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { username, displayName, email } = await req.json();
  const certID = Math.random().toString(36).substr(2, 8).toUpperCase();

  const certPath = path.join(process.cwd(), 'public', 'certificates', 'certificate.pdf');
  const existingPdfBytes = await readFile(certPath);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  const nameX = 78;
  const nameY = 265;
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  firstPage.drawText(displayName, {
    x: nameX,
    y: nameY,
    size: 36,
    font,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  // Send by email if requested
  if (email) {
    // Setup nodemailer (replace with your actual) – DO NOT COMMIT APP PASSWORD TO PUBLIC REPO!
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'wikisciencecompetition@gmail.com',
        pass: process.env.CONTACT_APP_PASSWORD || '<YOUR_APP_PASSWORD>'
      }
    });

    await transporter.sendMail({
      from: '"Wiki Science Competition" <contact@wikisciencecompetition.in>',
      to: email,
      subject: 'Your Wiki Science Competition Participation Certificate',
      text: `Hi ${displayName},\n\nAttached is your certificate for participating in Wiki Science Competition!\n\nBest wishes,\nTeam Wiki Science Competition India`,
      attachments: [
        {
          filename: `${displayName.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf`,
          content: pdfBytes,
        },
      ],
    });
  }

  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${displayName.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf"`,
    },
  });
}
