let mongoose = require("mongoose");
mongoose.pluralize(null);
// schema 
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number,
    url:String
});

//Model 
let produtModel = mongoose.model("Product",productSchema);

module.exports=produtModel;

