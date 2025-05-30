const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

async function uploadConversAI() {
  try {
    const filePath = path.join(__dirname, '../public/videos/conversai-demo.mp4');
    
    if (!fs.existsSync(filePath)) {
      console.log('❌ conversai-demo.mp4 not found in public/videos/');
      return;
    }

    const stats = fs.statSync(filePath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`Uploading conversai-demo.mp4 (${fileSizeMB}MB)...`);
    
    if (stats.size > 500 * 1024 * 1024) {
      console.log(`❌ File is too large (${fileSizeMB}MB). Maximum size is 500MB.`);
      return;
    }
    
    const fileBuffer = fs.readFileSync(filePath);
    
    // Try with exact filename
    const blob = await put('conversai-demo.mp4', fileBuffer, {
      access: 'public',
      contentType: 'video/mp4'
    });
    
    console.log(`✅ ConversAI video uploaded successfully!`);
    console.log(`URL: ${blob.url}`);
    console.log(`Expected URL: https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/conversai-demo.mp4`);
    
  } catch (error) {
    console.error('Upload failed:', error.message);
  }
}

uploadConversAI(); 