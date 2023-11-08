let productModel = require("../model/product.model");

let storeProduct= (product)=> {

    return productModel.insertMany(product);

}
let findProduct= ()=> {
    return productModel.find({});
}

let deleteProduct = (pid)=> {
    return productModel.deleteOne({_id:pid});
}

let updateProduct = (product)=> {
    return productModel.updateOne({_id:product._id},{$set:{price:product.price}});
}
module.exports = {storeProduct,findProduct,deleteProduct,updateProduct};




