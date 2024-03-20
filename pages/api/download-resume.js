// pages/api/downloadResume.js

import { generatePDF } from '../../utils/resumeUtils';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const pdfBuffer = await generatePDF();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).send('Error generating PDF');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
