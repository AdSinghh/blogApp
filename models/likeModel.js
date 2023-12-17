// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for likes
const likeSchema = mongoose.Schema({
    // Reference to a Post document using its unique identifier
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post' // Indicates that this field references the "Post" model
    },
    // User who performed the like action
    user: {
        type: String, // The type of the 'user' field is a string
        required: true // The 'user' field is required
    }
});

// Create and export a Mongoose model named "Like" based on the defined like schema
module.exports = mongoose.model('Like', likeSchema);
