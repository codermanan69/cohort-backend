const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect(
        "mongodb://manan:MgIlflO3uTRmpTbS@ac-bor1y2d-shard-00-00.ae5hkdj.mongodb.net:27017,ac-bor1y2d-shard-00-01.ae5hkdj.mongodb.net:27017,ac-bor1y2d-shard-00-02.ae5hkdj.mongodb.net:27017/?ssl=true&replicaSet=atlas-ctchd9-shard-0&authSource=admin&appName=Cluster0"
    )
    .then(() => {
        console.log("Connected to Database");
    })
   
}

connectToDb();

app.listen(3000, () => {
    console.log("server is running on the port 3000");
});