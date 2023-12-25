const express = require('express');
const app = express();
const port = 3006;
const morgan = require("morgan")
app.use(morgan("combined"))

// payload limit 10mb
const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors = require("cors");
app.use(cors())

app.listen(port, () => {
    console.log(`Server-Product listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("petopiadb");
productCollection = database.collection("product");

// get all product
app.get("/products", cors(), async (req, res) => {
    try {
        const result = await productCollection.find({}).toArray();
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

// get product by id
app.get("/products/:id", cors(), async (req, res) => {
    try {
        var o_id = new ObjectId(req.params["id"]);
        const result = await productCollection.find({ _id: o_id }).toArray();
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})


// post fashion
app.post("/products", cors(), async (req, res) => {
    try {
        // put json Fashion into database
        await productCollection.insertOne(req.body)
        // send message to client (send all database to client)
        res.send(req.body)
    } catch (err) {
        res.send(err)
    }
})

// put fashion
app.put("/products", cors(), async (req, res) => {
    //update json Fashion into database
    try {
        await productCollection.updateOne(
            { _id: new ObjectId(req.body._id) },//condition for update
            {
                $set: { //Field for updating
                    name: req.body.name,
                    price: req.body.price,
                    des: req.body.des,
                    img: req.body.img,
                    cate: req.body.cate,
                    pettype: req.body.pettype
                }
            }
        )
        // send Fashion after updating
        var o_id = new ObjectId(req.body._id);
        const result = await productCollection.find({ _id: o_id }).toArray();
        res.send(result[0])
    }
    catch (err) {
        res.send(err)
    }
})

// delete fashion
app.delete("/products/:id", cors(), async (req, res) => {
    try {
        // find detail Fashion with id
        var o_id = new ObjectId(req.params["id"]);
        const result = await productCollection.find({ _id: o_id }).toArray();
        // delete json Fashion from database
        await productCollection.deleteOne({ _id: o_id })
        // send message to client
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})