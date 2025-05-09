# Video Upload and Processing MVP

This is a simple MVP application designed for developers who need to quickly process raw video content for YouTube or other platforms. The application allows users to upload raw videos, which are then processed to:

Remove background noise

Add non-copyrighted background music

Automatically remove unwanted blank spaces

The application is built using Angular for the frontend, Node.js for the backend, and Python for video processing.

## Features
Video Upload: Allows users to drag and drop video files or select from their file system.

Processing: Automatically processes the video to remove noise, add music, and cut unwanted gaps.

Download: Provides a processed video for download after the task completes.

## Tech Stack
Frontend: Angular

Backend: Node.js (Express)

Video Processing: Python (using libraries like moviepy, pydub)

Storage: Local or cloud-based (e.g., AWS S3, Google Cloud Storage)

## Installation
Prerequisites
Node.js: Download and install Node.js

Python: Download and install Python

Angular CLI: Install using npm install -g @angular/cli


