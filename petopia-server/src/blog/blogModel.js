const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "petopiadb";
let db;
let blogCollection;

client.connect().then(client => {
    db = client.db(dbName);
    blogCollection = db.collection("blog");
    console.log("Connected successfully to the database");
});

const findAll = async () => {
    return await blogCollection.find({}).toArray();
};

const findById = async (id) => {
    return await blogCollection.findOne({ _id: new ObjectId(id) });
};

const create = async (blog) => {
    return await blogCollection.insertOne(blog);
};

const update = async (id, blog) => {
    const result = await blogCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: blog }
    );
    return result;
};

// Delete blog
const remove = async (id) => {
    return await blogCollection.deleteOne({ _id: new ObjectId(id) });
};
module.exports = { findAll, findById, create, update, remove };