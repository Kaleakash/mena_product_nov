let productController = require("../controller/productController");
let auth = require("../middleware/auth");
let express = require("express");
let router = express.Router();

// map sub path and base upon http method it will pass the request. 
router.post("/storeProduct",productController.storeProduct);

router.get("/findProduct",auth.verifyUserToken,productController.findAllProduct);

router.delete("/deleteProduct/:_id",productController.deleteProductById);


router.put("/updateProduct",productController.updateProduct);

module.exports=router;