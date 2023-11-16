let userModel = require("../model/user.model");

let signUp= (user)=> {

    return userModel.insertMany(user);

}
let signIn= (emailidValue)=> {
    return userModel.findOne({emailid:emailidValue});
}


module.exports = {signUp,signIn};




