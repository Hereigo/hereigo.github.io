const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbcfg = require('./config/db');

const app = express();
const port = 8000;

// BodyParser:
app.use(bodyParser.urlencoded({ extended: true }));

// Simple app start:
// require('./app/routes')(app, {});
// app.listen(port, () => {
//     console.log('We are live on ' + port);
// });

// MongoClient.connect(dbcfg.url, (err, client) => {
//     if (err) { return console.log('1st Err: ', err); }
//     // Make sure you add the database name and not the collection name
//     const db = client.db("test")
//     // (for MongoDB 3.0+ only)
//     require('./app/routes')(app, db);
//     app.listen(port, () => {
//         console.log('We are live on ' + port);
//     });
// });

const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbcfg.url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const db = client.db("test");
        require('./app/routes')(app, db);

        app.listen(port, () => {
            console.log('We are live on ' + port);
        });

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);