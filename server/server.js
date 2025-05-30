import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// mongoDB connection

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "passOp";

await client.connect().then(() => {
    console.log("data base connected successfully");
}).catch((err) => {
    console.error("Failed to connect to the database", err);
});

const db = client.db(dbName);


app.get("/", async (req, res) => {
    const collection = db.collection("passwords")
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
});

app.post("/", async (req, res) => {

    const data = req.body
    const collection = db.collection("passwords")
    const insetResult = await collection.insertOne(data);
    res.send({success : true , data : insetResult});
})

app.delete("/", async (req, res) => {
    const data = req.body;
    const collection = db.collection("passwords");
    const deletedResult = await collection.deleteOne({_id: new ObjectId(data.id)});
    res.send({success : true ,datat : deletedResult})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});