
// const express = require('express');
// let router = express.Router();
let services = require('../../services/resources');
module.exports = {
    giveResources:(req,res) =>{
        const data = services.getBook(req,res);
        res.send(data);
    },
    getAllResources: (req, res) => {
        const data = services.getAllResources(req,res);
        res.send(data);
    },
    createResource: (req, res) => {
        const data = services.createResource(req,res);
        res.send(data); // 201 status code for resource creation
        
    },
    updateResource: (req, res) => {
        const data = services.updateResource(req.params.id, req.body);
        res.send(data)

    },
    deleteResource: (req, res) => {
        const data = services.deleteResource(req.params.id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send("Resource not found");
        }
    }
    
}