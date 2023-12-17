// import model
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async (req, res) => {
    try {
        // fetch data from req body
        const { user, post, body } = req.body;

        // create a comment object
        const comment = new Comment({
            post,
            user,
            body
        });

        // Save the comment into the database
        const savedComment = await comment.save();

        // Update the post with the saved comment ID
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments") // Assuming 'comments' is the field in the Post model that references Comment documents
            .exec();


      // Respond with the updated post
        res.json({
            post: updatedPost
        });
    } catch (error) {
        console.error('Error while creating comment:', error);

        // Respond with a more detailed error message
        return res.status(500).json({
            error: `Error while creating comment: ${error.message}`
        });
    }
};
