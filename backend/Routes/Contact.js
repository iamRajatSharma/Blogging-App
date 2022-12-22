const express = require("express")
const routes = express.Router()
const Contact = require("../model/Contact")

routes.post("/save", async (req, res) => {
    let data = await Contact(req.body)
    data = await data.save();
    res.send(data)
})


module.exports = routes;