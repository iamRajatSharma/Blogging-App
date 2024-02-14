const express = require("express")
const app = express();
require("./Database/Conn")
require("dotenv").config()
const cors = require("cors")
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.use("/post", require("./Routes/Post"))
app.use("/user", require("./Routes/Users"))
app.use("/category", require("./Routes/Category"))
app.use("/home", require("./Routes/Home"))
app.use("/contact", require("./Routes/Contact"))
app.use("/comment", require("./Routes/Comment"))
app.use("/admin", require("./Routes/Admin"))

app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port : ${process.env.PORT}`)
    }
})