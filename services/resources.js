const {models} = require('../models/defination');
const Joi = require('joi'); // Use Joi for validation

// Define a schema for resource update
const updateResourceSchema = Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    pages: Joi.number().integer(),
});

const createResourceSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  pages: Joi.number().integer().required(),
});


  const express = require('express');
  let router = express.Router();

  module.exports = {
    getBook: (req, res) => {
        const id = parseInt(req.params.id);
        const object = randomBooks.find(item => item.id === id);
        res.send(object);
    },
    getAllResources: async (data) => {
      const result = await models.user.findAll();;
      return result;
    },
    createResource: async(data) => {
      // Validate the incoming data against the schema
      // const { error, value } = await createResourceSchema.validate(req.body);
      const result = await models.user.create(data);
      return result;
      // if(error){
      //   res.send("INvalid request body")
      // }else{
      //   randomBooks.push(value);
      //   res.send(randomBooks);
      // }
  },
  
  updateResource: (id,datas) => {
    // Validate the incoming data against the schema
    const { error, value } = updateResourceSchema.validate(datas);

    if (error) {
        // Return a 400 Bad Request response with validation error details
        return error;
    }

    // If validation passes, proceed to update the resource
    else{
      const data = randomBooks.find((c) => c.id == id);
      if(data){
        data.author = datas.author;
          console.log("enterd modification");
          data.pages = datas.pages;
          data.title  = datas.title;
          return data;
      }
      else{
          return "not found"
        }
    }
  },
  deleteResource: (id) => {
    // Find the index of the resource with the given ID in the array
    const indexToDelete = randomBooks.findIndex(item => item.id === parseInt(id));

    // Check if the resource exists in the array
    if (indexToDelete !== -1) {
        // Use splice to remove the resource at the found index
        const deletedResource = randomBooks.splice(indexToDelete, 1)[0];

        // Return the deleted resource
        return deletedResource;
    }

    // If the resource is not found, return null or an appropriate response
    return null;
  },
}