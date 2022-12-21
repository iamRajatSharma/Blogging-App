const mongoose = require("mongoose")
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    add_by: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("category", CategorySchema);