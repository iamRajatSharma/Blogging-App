const express = require("express")
const Category = require("../model/Category")
const routes = express.Router()

routes.post("/save", async (req, res) => {
    let check = await Category.findOne({ name: req.body.name })
    if (check) {
        res.send({ "msg": "Category Already Exists. !!!", "status": "1", "varient": "danger" })
    }
    else {
        let data = await Category(req.body)
        data = await data.save()
        res.status(200).json({ data, status: 0, "msg": "Category Saved Successfully. !!!", "varient": "success" })
    }

})

routes.get("/fetchall", async (req, res) => {
    let data = await Category.find({})
    res.send(data)
})


routes.get("/fetchSignleCategory/:id", async (req, res) => {
    let data = await Category.findOne({ _id: req.params.id })
    res.send(data)
})


routes.get("/fetchAllCat", async (req, res) => {
    let data = await Category.find({}, { _id: 1, name: 1 }).sort({ name: 1 })
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