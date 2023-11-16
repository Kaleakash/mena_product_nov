let mongoose = require("mongoose");
mongoose.pluralize(null);
// schema 
let userSchema = mongoose.Schema({
    emailid:String,
    password:String,
    typeofuser:String
});

//Model 
let userModel = mongoose.model("User",userSchema);

module.exports=userModel;

