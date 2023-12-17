// Import the express module and create an instance of the app
const express = require('express');
const app = express();

// Load environment variables from a .env file
require('dotenv').config();

// Set the port for the server to either the environment variable PORT or 4000
const PORT = process.env.PORT || 4000;

// Parse incoming JSON requests
app.use(express.json());

// Import the blog routes module
const blog = require('./routes/blog');

// Mount the blog routes at the "/api/v1" path
// For example, a route defined in blog.js with path "/posts" will be accessible at "/api/v1/posts"
app.use("/api/v1", blog);

// Connect to the database using the dbConnect module
const dbConnect = require('./config/database');
dbConnect();

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

// Define a default route for the homepage
app.get('/', (req, res) => {
    res.send("<h1>This is Homepage</h1>");
});
