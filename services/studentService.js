const {models} = require('../models/defination')
module.exports ={
    createStudent:async (data) =>{
     const result = await models.student.create(data);
     return result
    }   
}