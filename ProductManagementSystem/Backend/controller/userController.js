let userRepository = require("../repository/user.repository");
let bcryptjs = require("bcryptjs");
let jwt  = require("jsonwebtoken");
// post 
let signUp = async (req,res)=> {
    let user = req.body;
    try{
    console.log(user);
    let salt   =  await bcryptjs.genSalt(5);
    let hashPassword = await bcryptjs.hash(user.password,salt);
    //let hashPassword = await userRepository.signUp(user);
    user.password=hashPassword;
    console.log(user);
    let result  = await userRepository.signUp(user);
    console.log(result);
    // console.log(hashPassword);
    // console.log(salt);
    // let passwordVerify = await bcryptjs.compare("akash1@123",hashPassword);
    // console.log(passwordVerify);
    res.send(result);
    }catch(e){
        //res.send("Record didn't insert");
        console.log(e)
    }

    
}

// get 
let signIn = async (req,res)=> {
    try{
        let user = req.body;
        console.log(user);
        let result = await userRepository.signIn(user.emailid);
        //console.log(result);
        if(result!=null){
            let passwordVerify = await bcryptjs.compare(user.password,result.password);
                if(passwordVerify){
                        let payload = {"name":user.emailid,"typeofuser":user.typeofuser}                        
                let tokenValue  = jwt.sign(payload,"skey");
                res.send({"msg":"Successfully login","token":tokenValue});
                }else {
                    res.send("Password invalid");
                }
                 
        }else {
            res.send("InValid emailid ");
        }
    }catch(e){
        console.log(e);
    }
    //res.send("done!...")
}



module.exports={signUp,signIn};



