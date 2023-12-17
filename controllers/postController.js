// Import the Post model
const Post = require('../models/postModel');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        // Extract data from the request body
        const { title, body } = req.body;

        // Create a new Post object
        const post = new Post({
            title,
            body
        });

        // Save the new post to the database
        const savedPost = await post.save();

        // Respond with the saved post
        res.json({
            post: savedPost
        });
    } catch (error) {
        // Handle errors
        console.error('Error while creating post:', error);

        // Respond with a detailed error message
        return res.status(400).json({
            error: 'Error while creating post'
        });
    }
};

// Fetch all posts with populated comments and likes
exports.fetchAllPosts = async (req, res) => {
    try {
        // Find all posts and populate the 'comments' and 'likes' fields
        const posts = await Post.find()
            .populate('comments') // Assuming 'comments' is the field in the Post model that references Comment documents
            .populate('likes')    // Assuming 'likes' is the field in the Post model that references Like documents
            .exec();

        // Respond with the fetched posts
        res.json({
            posts
        });
    } catch (error) {
        // Handle errors
        console.error('Error while fetching posts:', error);

        // Respond with a detailed error message
        return res.status(400).json({
            error: 'Error while fetching posts'
        });
    }
};
