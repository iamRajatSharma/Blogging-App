const express = require("express")
const routes = express.Router()

routes.post("/save", (req, res) => {
    res.send("hello World")
})


module.exports = routes;