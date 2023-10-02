let users = require('../models/users.model')
const { v4: uuidv4 } = require('uuid');


const getAllUsers = (req, res) => {
    res.status(200).json({users})
}
//Create a new user
const createUsers = (req, res) => {
        const newUser = 
            {
                id: uuidv4(),
                name: req.body.name,
                email: req.body.email
            }
            users.push(newUser);
        
    res.status(201).json({users})
}

//Update a user

const updateUsers = (req, res) => {
    const userId = req.params.id
    const {name , email} = req.body;

    users.filter((user) => user.id === userId).map((selectedUser) =>{
        selectedUser.name = name
        selectedUser.email = email
    })

    res.status(200).json({users})
}

//Delete a user

const deleteUsers = (req, res) => {
    const userId = req.params.id
   const existUser =  users.filter((user) => user.id !== userId)

   res.status(200).json({existUser})
}

module.exports = {getAllUsers, createUsers, updateUsers, deleteUsers}