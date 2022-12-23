const express = require("express")
const routes = express.Router()
const Users = require("../model/Users")
const Category = require("../model/Category")
const Post = require("../model/Posts")

routes.get("/countData", (req, res) => {
    let n1, n2, n3 = 0
    let count1 = Users.find({})
    count1 = count1.count((err, resp1) => {
        n1 = count1
    })
        res.send(n1)
    // let count2 = Post.find({})
    // count2.count((err, resp2) => {
    //     n2 = resp2
    // })

    // let count3 = Category.find({})
    // count3.count((err, resp3) => {
    //     n3 = resp3
    // })
    // console.log({ "n1": n1, "n2": n2, "n3": n3 })
    // res.send({ "n1": n1, "n2": n2, "n3": n3 })
})


module.exports = routes;