// pages/api/photos.js
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  const folderPath = path.join(process.cwd(), 'public', 'first-story-room'); // Adjust the folder path as per your project structure
  const files = fs.readdirSync(folderPath);
  const photoUrls = files.map(file => `/first-story-room/${file}`);
  res.status(200).json({ photoUrls });
}
