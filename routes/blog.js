// Import Express and create a router
const express = require('express');
const router = express.Router();

// Import controller functions
const { createComment } = require('../controllers/commentController');
const { createPost, fetchAllPosts } = require('../controllers/postController');
const { likePost, unlikePost } = require('../controllers/likeController');

// Define routes and associate them with controller functions

// Route for creating a comment
router.post("/create/comment", createComment);

// Route for creating a post
router.post("/create/post", createPost);

// Route for fetching all posts
router.post('/posts', fetchAllPosts);

// Route for liking a post
router.post('/likes/like', likePost);

// Route for unliking a post
router.post('/likes/unlike', unlikePost);

// Export the router for use in other parts of the application
module.exports = router;
