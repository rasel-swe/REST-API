const express = require('express');
const { getAllUsers, createUsers, updateUsers, deleteUsers } = require('../controllers/users.controller');
const Router  = express.Router();


Router.get("/", getAllUsers)
Router.post("/", createUsers)
Router.put("/:id", updateUsers)
Router.delete("/:id", deleteUsers)



module.exports = Router;