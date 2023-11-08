let productRepository = require("../repository/product.repository");


// post 
let storeProduct = async (req,res)=> {
    let product = req.body;
    try{
    let result = await productRepository.storeProduct(product);
    if(result){
        res.send("Record inserted successfully..");
    }else{
        res.send("Record is null");
    }
    }catch(e){
        res.send("Record didn't insert");
    }
}

// get 
let findAllProduct = async (req,res)=> {
    let result = await productRepository.findProduct();
    res.json(result);
}

// delete 
 let deleteProductById = async(req,res)=> {
    let pid = req.params._id;
    let result = await productRepository.deleteProduct(pid);
    //res.json(result);
    if(result.deletedCount>0){
        res.send("REcord deleted successfully")
    }else {
        res.send("Record not present");
    }
 }


 // put 
let updateProduct = async (req,res)=> {
    let product = req.body;

    let result = await productRepository.updateProduct(product);
    //res.send(result);
    if(result.modifiedCount>0){
        res.send("Record updated")
    }else if(result.matchedCount>0){
        res.send("record present din't update because same amount you passed")
    }else {
        res.send("Record didn't update");
    }
}


module.exports={storeProduct,findAllProduct,deleteProductById,updateProduct};



