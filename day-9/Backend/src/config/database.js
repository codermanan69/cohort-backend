const mongoose = require("mongoose");

function connectToDB() {
    console.log("Attempting DB connection...");

    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("DB Connection Error:", err.message);
    });
}

module.exports = connectToDB;
