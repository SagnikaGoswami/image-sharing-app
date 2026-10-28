# Image Sharing App

A full-stack image-sharing application built with the MERN stack and ImageKit. The project allows users to create image-based posts and view them in a feed, demonstrating REST API integration, file uploads, cloud storage, and database operations.

## Features

- Create posts with images and captions
- Upload images using Multer and ImageKit
- Store post details in MongoDB
- Fetch and display posts in a feed
- Navigate between pages using React Router
- Connect frontend and backend through Axios

## Tech Stack

**Frontend:** React, React Router, Axios

**Backend:** Node.js, Express.js, Multer

**Database:** MongoDB, Mongoose

**Cloud Storage:** ImageKit

## Project Structure

```text
image-sharing-app/
├── Backend/
│   ├── src/
│   │   ├── models/
│   │   ├── services/
│   │   ├── db/
│   │   └── app.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── CreatePost.jsx
    │   │   └── Feed.jsx
    │   └── App.jsx
    └── package.json
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/SagnikaGoswami/image-sharing-app.git
cd image-sharing-app
```

Install dependencies separately in the `Backend` and `Frontend` directories using `npm install`.

Create a `.env` file in the backend directory using `.env.example` as a reference, and configure the required MongoDB and ImageKit credentials.

Run the frontend and backend using their respective development scripts.

## About

This project was developed to practice full-stack application development, including frontend-backend communication, RESTful APIs, MongoDB integration, and cloud-based image uploads.
