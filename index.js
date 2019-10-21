const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');



//pull in the routes/todos file    
const todoRoutes = require('./routes/todos');


//allow us to access data from the body for get/post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



//initialize the first root route
app.get('/', function(req, res) {
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);


app.listen(port, function() {
    console.log('app is running on port 3000');
});










//connecting to the MONGO database

/* const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
}); */