const express = require('express');
const router = express.Router();
const db = require("../models");
const helpers = require('../helpers/todos');





//routes to retrieving all todo's from the database and posting to the database
router.route('/')
    .get(helpers.getTodos) //Get the todo's from the database
    .post(helpers.createTodo) //Post / add a todo to the database


//routing to individual todos called by their id
router.route('/:todoId')
    .get(helpers.getTodo) //Retrieve a Todo
    .put(helpers.updateTodo) //Update a Todo
    .delete(helpers.deleteTodo) //Delete route


module.exports = router;