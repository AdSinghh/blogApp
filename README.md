# Blog App

This is a simple blog app that allows users to create posts, add comments, and like/unlike posts.

## Features

- Create and publish blog posts.
- Add comments to blog posts.
- Like and unlike blog posts.
- Fetch all posts with populated comments and likes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

git clone https://github.com/your-username/blog-app.git
cd blog-app


Certainly! Below is a template for a README file for your blog app. Feel free to modify it based on the specific details and features of your application:


- Create and publish blog posts.
- Add comments to blog posts.
- Like and unlike blog posts.
- Fetch all posts with populated comments and likes.



Before you begin, ensure you have the following prerequisites:

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

git clone https://github.com/your-username/blog-app.git
cd blog-app



2.Install dependencies:
npm install

3.Set up the MongoDB connection:
Create a .env file in the root directory.

Add the following line to the .env file, replacing <your-mongodb-url> with your MongoDB connection string:

makefile

MONGODB_URI=<your-mongodb-url>

Usage
To run the application, use the following command:


npm start
Visit http://localhost:3000 in your browser to access the application.

API Endpoints
The following API endpoints are available:

POST /api/create/comment: Create a comment.
POST /api/create/post: Create a blog post.
POST /api/posts: Fetch all posts with populated comments and likes.
POST /api/likes/like: Like a post.
POST /api/likes/unlike: Unlike a post.
Make requests to these endpoints using tools like Postman or any API testing tool.

Contributing
Contributions are welcome! Please follow the contribution guidelines.
