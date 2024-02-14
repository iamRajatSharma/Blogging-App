var mongoose = require("mongoose")
mongoose.set('strictQuery', true);
require("dotenv").config()
mongoose.connect(process.env.DB_URL, (err) => {
    if (err) {
        console.log(err.name)
    }
});

