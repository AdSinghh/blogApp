// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for comments
const commentSchema = new mongoose.Schema({
    // Reference to a Post document using its unique identifier
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // Indicates that this field references the "Post" model
    },
    // User who created the comment
    user: {
        type: String, 
        required: true // The 'user' field is required
    },
    // Content/body of the comment
    body: {
        type: String, 
        required: true // The 'body' field is required
    }
});

// Create and export a Mongoose model named "Comment" based on the defined comment schema
module.exports = mongoose.model("Comment", commentSchema);
