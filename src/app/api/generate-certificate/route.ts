import { NextRequest } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFile } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { username, displayName, email } = await req.json();
  const certID = Math.random().toString(36).substr(2, 8).toUpperCase();

  // 1. Load certificate template
  const certPath = path.join(process.cwd(), 'public', 'certificates', 'certificate.pdf');
  const existingPdfBytes = await readFile(certPath);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // 2. Embed font
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // 3. Text settings
  const defaultFontSize = 36;
  let fontSize = defaultFontSize;

  const nameY = 250;            // vertical position stays fixed
  const maxAllowedWidth = 460;  // max width that fits above the bottom line (tune this)

  const nameText = String(displayName ?? '').trim() || 'Participant';

  // 4. Measure text width and shrink font if needed
  let textWidth = font.widthOfTextAtSize(nameText, fontSize);

  while (textWidth > maxAllowedWidth && fontSize > 16) {
    fontSize -= 1; // shrink 1pt each time
    textWidth = font.widthOfTextAtSize(nameText, fontSize);
  }

  // 5. Center horizontally
  const pageWidth = firstPage.getWidth();
  const nameX = (pageWidth - textWidth) / 2;

  // 6. Draw the name
  firstPage.drawText(nameText, {
    x: nameX,
    y: nameY,
    size: fontSize,
    font,
    color: rgb(0, 0, 0),
  });

  // 7. Save final PDF
  const pdfBytes = await pdfDoc.save();

  // 8. Email (optional)
  if (email) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'wikisciencecompetition@gmail.com',
        pass: process.env.CONTACT_APP_PASSWORD || '<YOUR_APP_PASSWORD>',
      },
    });

    await transporter.sendMail({
      from: '"Wiki Science Competition" <contact@wikisciencecompetition.in>',
      to: email,
      subject: 'Your Wiki Science Competition Participation Certificate',
      text: `Hi ${nameText},\n\nAttached is your certificate for participating in Wiki Science Competition!\n\nBest wishes,\nTeam Wiki Science Competition India`,
      attachments: [
        {
          filename: `${nameText.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf`,
          content: pdfBytes,
        },
      ],
    });
  }

  // 9. Also return the PDF as response
  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${nameText.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf"`,
    },
  });
}
