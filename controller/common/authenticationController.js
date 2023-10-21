const jwt = require('jsonwebtoken');
const {models} = require('../../models/defination/index')
const config = require('../../configure')
let tokens = []
const bcyrpt = require('bcrypt')
function generateAccessToken(user){
    return jwt.sign(user,config.jwt);
};
module.exports ={
    authenticateToken: async (req,res,next) =>{
        const authHeader  =  req.headers["authorization"];
        console.log(authHeader);
        const token = authHeader  && authHeader.split(" ")[1];
        if(!token){
            return res.sendStatus(401);
        }
        jwt.verify(token,config.jwt,(err,user)=>{
            if(err){
               return res.sendStatus(403);
               console.log("latest")
            }
            req.user = user;
            next();
        })  
    },
    login:async(req,res)=>{
        try{
            const {email,phoneNUmbers} = req.body;
            let user = await models.user.findOne({
                where:{
                    email:email
                }
            })
            user = user.dataValues;
            if(user && (bcyrpt.compareSync(phoneNUmbers,user.phoneNUmbers))){
                const token = generateAccessToken(user);
                tokens.push(token);
                res.send(JSON.stringify(token));
            }
        }catch(e){
            console.log(e);
        }
    }
}