const fs = require('fs');
const puppeteer = require('puppeteer');

import resumeData from '../pages/about/resume/resumeData.json';

const generateHTML = (data) => {
    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume</title>
            <style>
                /* Add your CSS styles here */
                /* Example styles */
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 20px;
                }
                h2, h3 {
                    margin-bottom: 10px;
                }
                p {
                    margin-bottom: 5px;
                }
                .section {
                    margin-bottom: 20px;
                }
                .heading {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .entry {
                    margin-bottom: 15px;
                }
                .entry .title {
                    font-weight: bold;
                }
                .entry .date {
                    font-style: italic;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="section">
                <h2 class="heading">${data.careerObjectiveSection.heading}</h2>
                <p>${data.careerObjectiveSection.description}</p>
            </div>
            <div class="section">
                <h2 class="heading">${data.educationSection.heading}</h2>
    `;
    data.educationSection.education.forEach((edu) => {
        html += `
            <div class="entry">
                <p class="title">${edu.degree}: ${edu.major}, ${edu.university}, ${edu.location}</p>
                <p class="date">${edu.startDate} - ${edu.endDate}</p>
                <p>GPA: ${edu.gpa}</p>
                <p>${edu.description}</p>
            </div>
        `;
    });
    html += `
            </div>
            <div class="section">
                <h2 class="heading">${data.skillsSection.heading}</h2>
    `;
    data.skillsSection.skillSets.forEach((skillSet) => {
        html += `
            <div class="entry">
                <h3>${skillSet.name}</h3>
                <ul>
        `;
        skillSet.list.forEach((skill) => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
            </div>
        `;
    });
    html += `
            </div>
            <div class="section">
                <h2 class="heading">${data.employmentSection.heading}</h2>
    `;
    data.employmentSection.jobs.forEach((exp) => {
        html += `
            <div class="entry">
                <p class="title">${exp.title}, ${exp.company}, ${exp.location}</p>
                <p class="date">${exp.startDate} - ${exp.endDate}</p>
                <p>${exp.description}</p>
                <h3>Projects:</h3>
                <ul>
        `;
        exp.projects.forEach((project) => {
            html += `
                <li>
                    <p><strong>${project.name}</strong></p>
                    <p>${project.description}</p>
                    <p><strong>Skills:</strong> ${project.skills.join(', ')}</p>
                </li>
            `;
        });
        html += `
                </ul>
            </div>
        `;
    });
    
    html += `
            </div>
        </body>
        </html>
    `;
    return html;
};



const generatePDF = async () => {
    const htmlContent = generateHTML(resumeData);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    // Generate PDF buffer
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

    await browser.close();
    console.log('PDF generated successfully.');
    
    return pdfBuffer;
};

module.exports = { generatePDF };