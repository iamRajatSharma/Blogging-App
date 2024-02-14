const express = require("express")
const routes = express.Router()
const Users = require("../model/Users")
const Category = require("../model/Category")
const Post = require("../model/Posts")

routes.get("/index", async (req, res) => {

    let cat = await Category.find({})

    let posts = await Post.find({})

    let users = await Users.find({})

    res.send({ Categories: cat.length, Posts: posts.length, Users: users.length })

})


module.exports = routes;