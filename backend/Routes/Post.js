const express = require("express");
const Posts = require("../model/Posts");
const routes = express.Router()
const Comment = require("../model/Comment")

// save new post
routes.post("/save", async (req, res) => {
    console.log(req.body);
    if (req.body.title == undefined || req.body.body == undefined || req.body.tags == undefined || req.body.category == undefined) {
        return res.send({ msg: "All fields required", "status": "1", "varient": "danger" })
    }
    let data = await Posts(req.body)
    data = await data.save()
    if (data) {
        return res.status(200).json({ data, status: 0, "msg": "Post Saved Successfully. !!!", "varient": "success" })
    }
    return res.status(400).json({ status: 1, "msg": "Interbal Server Error", "varient": "danger" })
})

// fetch all post
routes.get("/fetchAll", async (req, res) => {
    let data = await Posts.find({})
    res.send(data);
})

// fetch single post
routes.get("/fetchSingle/:id", async (req, res) => {
    let data = await Posts.findOne({ _id: req.params.id })
    res.send(data);
})

// search data
routes.get("/searchData/:data", async (req, res) => {
    let key = req.params.data
    let data = await Posts.find({
        "title": {
            $regex: key
        }
    })
    // let data = await Posts.find({ title: req.params.data })
    res.send(data);
})


//delete single post
routes.delete("/deleteSingle/:id", async (req, res) => {
    let data = await Posts.deleteOne({ _id: req.params.id })
    res.send(data);
})


// for website
// fetch single post
routes.get("/fetchSinglePost/:id", async (req, res) => {
    let data = await Posts.findOne({ _id: req.params.id })
    let comments = await Comment.find({ post_id: req.params.id })
    // let prev = await Posts.findOne({}).rand
    // let prev = await Posts.find({}).sort({ _id: -1 }).limit(1)
    // let next = await Posts.find({}).sort({ _id: 1 }).limit(1)
    // const allPost = { data, prev, next }
    res.send({ "data": data, "comments": comments });
})

// fetch category wise data
routes.get("/categoryWise/:name", async (req, res) => {
    let data = await Posts.find({ category: req.params.name })
    res.send(data);
})


module.exports = routes;