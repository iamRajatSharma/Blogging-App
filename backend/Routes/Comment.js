const express = require("express")
const routes = express.Router()
const Comment = require("../model/Comment")

routes.post("/save", async (req, res) => {
    let data = await Comment(req.body)
    data = await data.save();
    res.send(data)
})


module.exports = routes;