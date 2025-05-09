const express = require('express');
const multer = require('multer');
const { processVideo } = require('../python/process_video');  // Call Python script
const { exec } = require('child_process');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
    const videoPath = req.file.path;
    
    // Trigger video processing (call Python script here)
    processVideo(videoPath)
        .then((processedVideoPath) => {
            res.send({ videoUrl: `/download/${processedVideoPath}` });
        })
        .catch((err) => {
            res.status(500).send({ error: 'Processing failed' });
        });
});

app.listen(3000, () => {
    console.log('Backend server running on http://localhost:3000');
});

function processVideo(inputVideoPath) {
    return new Promise((resolve, reject) => {
        exec(`python ../python/process_video.py ${inputVideoPath}`, (err, stdout, stderr) => {
            if (err) {
                reject(`Error: ${stderr}`);
            } else {
                resolve(stdout.trim());  // Returns processed video path
            }
        });
    });
}

