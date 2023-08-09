import express from "express";
import mongoose from "mongoose"

const app = express()
// What if the ports change. Anyway to import the MongoDB's port from its dockerfile
// or from mongo.yaml or mongo-configmap.yaml?

const port = 8082
const connection = await mongoose.connect('mongodb://mongodb-service/Names_dataset?authSource=admin', {
    useNewUrlParser: true, 
    user: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
    pass: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD})
    .then(()=>{
        console.log("Successfully connected to database!")
    }).catch(err => {
        console.log("error connecting to databse");
        console.log(err);
    })
const schema = new mongoose.Schema({
    names: [String]
})
const names = mongoose.model("names", schema)


const result = await names.find();
console.log("res: ",result);
app.get("/", async(req, res) => {
    const result = await names.find();
    console.log(result);
    res.send(result);
})
app.listen(port, () => {console.log(`app listening on port ${port}`)})
