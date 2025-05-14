const { createReadStream } = require('fs');
const { join } = require('path');

async function uploadVideo() {
  const videoPath = join(process.cwd(), 'public', 'videos', 'hero-bg.mp4');
  const fileStream = createReadStream(videoPath);

  try {
    const response = await fetch('http://localhost:3000/api/upload?filename=hero-bg.mp4', {
      method: 'POST',
      body: fileStream,
      duplex: 'half',
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Video uploaded successfully:', data.url);
  } catch (error) {
    console.error('Error uploading video:', error);
  }
}

uploadVideo(); 