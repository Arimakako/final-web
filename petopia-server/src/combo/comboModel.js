const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "petopiadb";
let db;
let comboCollection;

client.connect().then(client => {
    db = client.db(dbName);
    comboCollection = db.collection("combo");
    console.log("Connected successfully to the database");
});

const findAll = async () => {
    return await comboCollection.find({}).toArray();
};

const findById = async (id) => {
    return await comboCollection.findOne({ _id: new ObjectId(id) });
};

const create = async (combo) => {
    return await comboCollection.insertOne(combo);
};

const update = async (id, combo) => {
    const result = await comboCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: combo }
    );
    return result;
};

// Delete combo
const remove = async (id) => {
    return await comboCollection.deleteOne({ _id: new ObjectId(id) });
};
module.exports = { findAll, findById, create, update, remove };
