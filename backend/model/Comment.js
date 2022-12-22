const mongoose = require("mongoose")
const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("comments", CommentSchema);