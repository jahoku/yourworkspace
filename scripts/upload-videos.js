const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

async function uploadVideos() {
  try {
    const videosDir = path.join(__dirname, '../public/videos');
    const videos = [
      { file: 'autopageai.mp4', name: 'autopageai-demo.mp4' },
      { file: 'hero-bg.mp4', name: 'hero-bg.mp4' },
      { file: 'conversai.mp4', name: 'conversai-demo.mp4' }
    ];

    for (const video of videos) {
      const filePath = path.join(videosDir, video.file);
      
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        console.log(`Uploading ${video.file} (${fileSizeMB}MB)...`);
        
        // Check file size limit (500MB for Vercel Blob)
        if (stats.size > 500 * 1024 * 1024) {
          console.log(`❌ ${video.file} is too large (${fileSizeMB}MB). Maximum size is 500MB.`);
          continue;
        }
        
        const fileBuffer = fs.readFileSync(filePath);
        const blob = await put(video.name, fileBuffer, {
          access: 'public',
          contentType: 'video/mp4',
          addRandomSuffix: false,
          cacheControlMaxAge: 31536000
        });
        
        console.log(`✅ ${video.file} uploaded successfully!`);
        console.log(`URL: ${blob.url}`);
        console.log('---');
      } else {
        console.log(`❌ ${video.file} not found in ${videosDir}`);
      }
    }
  } catch (error) {
    console.error('Upload failed:', error);
    console.error('Error details:', error.message);
  }
}

uploadVideos(); 