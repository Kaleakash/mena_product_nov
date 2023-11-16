let jwt = require("jsonwebtoken");

let verifyUserToken = async (req,res,next)=> {

    let token = req.headers.authorization;
    if(!token){
        return res.send("Access Denies");
    }

    try{
        let verifyUserTokenInfo = await  jwt.verify(token,"skey");
        if(!verifyUserTokenInfo){
                res.send("Unauthorized request (InValid Token")
        }else {
                console.log("Valid token");
        }
        console.log("I Came Here in middleware")
        next();
    }catch(e){
        console.log(e) 
        res.send(e); 
    }
}


module.exports={verifyUserToken}