const express = require("express")
const app = express();
require("./Database/Conn")
require("dotenv").config()

app.use("/", require("./Routes/Post"))


app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port : ${process.env.PORT}`)
    }
})