const express = require("express")
const Category = require("../model/Category")
const routes = express.Router()

// save category
routes.post("/save", async (req, res) => {
    if (req.body.name == undefined || req.body.name == null || req.body.name == '') {
        return res.send({ msg: "Please provide category name ", "status": "1", "varient": "danger" })
    }
    let check = await Category.findOne({ name: req.body.name })
    if (check) {
        return res.send({ "msg": "Category Already Exists. !!!", "status": "1", "varient": "danger" })
    }
    else {
        let data = await Category(req.body)
        data = await data.save()
        if (data) {
            return res.status(200).json({ data, status: 0, "msg": "Category Saved Successfully. !!!", "varient": "success" })
        }
        return res.status(400).json({ status: 1, "msg": "Interbal Server Error", "varient": "danger" })
    }

})

// fetch all categories
routes.get("/fetchall", async (req, res) => {
    let data = await Category.find({})
    res.send(data)
})


// fetch single Category details
routes.get("/fetchSignleCategory/:id", async (req, res) => {
    let data = await Category.findOne({ _id: req.params.id })
    res.send(data)
})


routes.get("/fetchAllCat", async (req, res) => {
    let data = await Category.find({}, { _id: 1, name: 1 }).sort({ name: 1 })
    res.send(data)
})


// update Category
routes.post("/updateSignleCategory/:id", async (req, res) => {
    if (req.params.id == undefined || req.body.name == undefined || req.body.name == null) {
        return res.send({ msg: "Please provide category name ", "status": "1", "varient": "danger" })
    }
    let data = await Category.updateOne({ _id: req.params.id }, { $set: req.body })
    if (data) {
        return res.status(200).json({ data, status: 0, "msg": "Category Updated Successfully. !!!", "varient": "success" })
    }
    return res.status(400).json({ status: 1, "msg": "Interbal Server Error", "varient": "danger" })
})

// delete single category
routes.delete("/deleteSignleCategory/:id", async (req, res) => {
    if (req.params.id == undefined || req.params.id == undefined || req.params.id == null) {
        return res.send({ msg: "Please provide category ID ", "status": "1", "varient": "danger" })
    }
    let data = await Category.deleteOne({ _id: req.params.id })
    if (data) {
        return res.status(200).json({ data, status: 0, "msg": "Category Deleted Successfully. !!!", "varient": "success" })
    }
    return res.status(400).json({ status: 1, "msg": "Interbal Server Error", "varient": "danger" })
})




module.exports = routes;