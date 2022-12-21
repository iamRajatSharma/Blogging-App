const express = require("express")
const Category = require("../model/Category")
const routes = express.Router()

routes.post("/save", async (req, res) => {
    let todayDate = new Date().toJSON()
    todayDate = todayDate.split("T")[0]
    let data = await Category(req.body)
    // console.log(req.body, todayDate)
    data = await data.save()
    res.send(data)
})

routes.get("/fetchall", async (req, res) => {
    let data = await Category.find({})
    res.send(data)
})


routes.get("/fetchSignleCategory/:id", async (req, res) => {
    let data = await Category.findOne({ _id: req.params.id })
    res.send(data)
})


routes.post("/updateSignleCategory/:id", async (req, res) => {
    let data = await Category.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send(data)
})


routes.delete("/deleteSignleCategory/:id", async (req, res) => {
    let data = await Category.deleteOne({ _id: req.params.id })
    res.send(data)
})




module.exports = routes;