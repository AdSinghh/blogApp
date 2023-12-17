// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for posts
const postSchema = mongoose.Schema({
    // Title of the post
    title: {
       type: String,
       required: true // The title field is required
    },
    // Body/content of the post
    body: {
        type: String,
        required: true // The body field is required
    },
    // Reference to a Comment document using its unique identifier
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' // Indicates that this field references the "Comment" model
    },
    // Reference to a Like document using its unique identifier
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like' // Indicates that this field references the "Like" model
    }
});

// Create and export a Mongoose model named "Post" based on the defined post schema
module.exports = mongoose.model('Post', postSchema);
