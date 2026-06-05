const app = require('./src/app');
const mongoose = require("mongoose")

function connectToDB() {
    mongoose.connect("mongodb+srv://manansahni1111_db_user:NqeFBsSw9GGNmoaW@cluster0.f5ugrg1.mongodb.net/day-5")

    .then(() => {
        console.log("Connected To Database");
        
    })
}

connectToDB()

app.listen(3000, () => {
    console.log("server is running on port 3000");
})

