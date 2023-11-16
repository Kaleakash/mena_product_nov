let express = require("express");
let app = express();


let products=[
    {"pid":1,"pname":"Tv","price":670000},
    {"pid":2,"pname":"Computer","price":450000},
    {"pid":3,"pname":"Laptop","price":980000},
    {"pid":4,"pname":"Mobile","price":560000},
]
app.get("/",(req,res)=> {
    res.send("Welcome to Express JS with AWS Lambda function")

})

app.get("/products",(req,res)=> {
    res.json(products);
})

module.exports=app;
// it is use to run locally 
//app.listen(9090,()=>console.log("Application running on port number 9090"));