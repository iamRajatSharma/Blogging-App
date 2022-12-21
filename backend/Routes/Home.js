const express = require("express")
const routes = express.Router()
const Users = require("../model/Users")
const Category = require("../model/Category")
const Post = require("../model/Posts")

routes.get("/countData", (req, res) => {
    let count1 = Users.find({})
    count1 = count1.count((err, count)=>{
        console.log(count)
    })
    // console.log(count1)
    res.send("done")
})


module.exports = routes;