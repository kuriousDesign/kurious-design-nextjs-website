// pages/api/resume-pdf.js

import { generateHTML } from '../../utils/resumeUtils'; // Assuming you have a utility function to generate HTML from resume data
import puppeteer from 'puppeteer';
import resumeData from '../about/resume/resumeData.json'

export default async (req, res) => {
  const htmlContent = generateHTML(resumeData);

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    
    // Send PDF buffer as response
    res.status(200).send(pdfBuffer);
    
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
