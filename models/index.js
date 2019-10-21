const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then(function() {
        console.log("MongoDB mongoose is up and running!!!");
    }).catch(function(err) {
        console.log(err);
    });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");