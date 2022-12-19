const mongoose = require("mongoose")
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    tags: [],
    category: {
        type: String,
        required: true
    },
    add_by: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("posts", PostSchema);