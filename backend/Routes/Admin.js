const express = require("express")
const routes = express.Router()
const Admin = require("../model/Admin")

// admin logged in
routes.post("/login", async (req, res) => {
    let data = await Admin.findOne({ email: "admin@blog.in" })
    if (data) {
        if (data.password == "12345") {
            res.send(data)
        }
        else {
            res.send({ "msg": "Incorrect Email || Password" })
        }
    }
    else {
        res.send({ "msg": "User Not Found" })
    }

})

module.exports = routes;