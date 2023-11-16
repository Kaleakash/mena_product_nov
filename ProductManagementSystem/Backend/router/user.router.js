let userController = require("../controller/userController");

let express = require("express");
let router = express.Router();

// map sub path and base upon http method it will pass the request. 
router.post("/signIn",userController.signIn);

router.post("/signUp",userController.signUp);



module.exports=router;