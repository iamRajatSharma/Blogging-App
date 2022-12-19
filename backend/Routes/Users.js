const express = require("express")
const routes = express.Router()
const Users = require("../model/Users")

routes.post("/save", async (req, res) => {
    let data = await Users(req.body)
    data = await data.save()
    res.send(data)
})


module.exports = routes;