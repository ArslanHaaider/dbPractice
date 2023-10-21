
// const express = require('express');
// let router = express.Router();
let bcyrpt = require('bcrypt')
let services = require('../../services/resources');
module.exports = {
    giveUser:(req,res) =>{
        const data = services.getBook(req,res);
        res.send(data);
    },
    getAllUser: async (req, res) => {
        const data = await services.getAllResources(req,res);
        res.send(data);
    },
    createUser: async (req,res) => {
        const saltRound = 10;
        req.body.phoneNUmbers = bcyrpt.hashSync(req.body.phoneNUmbers,saltRound);
        const data = await services.createResource(req.body);
        res.send(data); // 201 status code for resource creation
        
    },
    createUserHelper: async (studentData) => {

        const data = await services.createResource(studentData);
        return data // 201 status code for resource creation
        
    },
    updateUser: (req, res) => {
        const data = services.updateResource(req.params.id, req.body);
        res.send(data)

    },
    deleteUser: (req, res) => {
        const data = services.deleteResource(req.params.id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send("Resource not found");
        }
    }
    
}