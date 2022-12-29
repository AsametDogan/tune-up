const jwt = require("jsonwebtoken")
const {SECRET} = require("../utils/config")

const authExactor = (req,res,next)=>{

    const token = req.headers["x-access-token"] || req.headers["authorization"]

    try {
        if(token){
            const user = jwt.verify(token,SECRET)
            
            if(!user){
                res.json({error:"You need to sign in"})
            }
            else{
                req.user = user
                next()
            }
            
        }
        else{
            res.json({error:"You need to sign in"})
        }
    } catch (error) {
        res.json({error:"You need to sign in"})
    }
    
}

module.exports = authExactor