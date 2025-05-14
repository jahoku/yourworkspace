import { createReadStream } from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';

interface BlobResponse {
  url: string;
}

async function uploadVideo() {
  const videoPath = join(process.cwd(), 'public', 'videos', 'hero-bg.mp4');
  const fileStream = createReadStream(videoPath);

  try {
    const response = await fetch('http://localhost:3000/api/upload?filename=hero-bg.mp4', {
      method: 'POST',
      body: fileStream,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json() as BlobResponse;
    console.log('Video uploaded successfully:', data.url);
  } catch (error) {
    console.error('Error uploading video:', error);
  }
}

uploadVideo(); 