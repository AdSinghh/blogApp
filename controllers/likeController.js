// Import models
const Post = require('../models/postModel');
const Like = require('../models/likeModel');

// Like a post
exports.likePost = async (req, res) => {
    try {
        // Extract data from request body
        const { post, user } = req.body;

        // Create a new Like object
        const like = new Like({
            user,
            post
        });

        // Save the like to the database
        const savedLike = await like.save();

        // Update the post by adding the ID of the saved like to the 'likes' array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        )
            .populate("likes") // Populate the 'likes' field in the Post model with actual like documents
            .exec();

        // Respond with the updated post
        res.json({
            post: updatedPost
        });
    } catch (error) {
        // Handle errors
        console.error('Error while liking post:', error);

        // Respond with a detailed error message
        return res.status(400).json({
            error: 'Error while liking post'
        });
    }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
    try {
        // Extract data from request body
        const { like, post } = req.body;

        // Find and delete the like from the Like collection
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        // Update the post by removing the ID of the deleted like from the 'likes' array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deletedLike._id } },
            { new: true }
        );

        // Respond with the updated post
        res.json({
            post: updatedPost
        });
    } catch (error) {
        // Handle errors
        console.error('Error while unliking post:', error);

        // Respond with a detailed error message
        return res.status(400).json({
            error: 'Error while unliking post'
        });
    }
};
