let express = require("express");
let app = express();
let productRouter = require("./router/product.router");
let userRouter  = require("./router/user.router");
let mongoose = require("mongoose");
let cors = require("cors");
let url = "mongodb://127.0.0.1:27017/productinfo";

mongoose.connect(url).then(res=>console.log("Database connected")).catch(err=>console.log(err));


//middleware 
app.use(express.json());        // Enable jSON data from post method 
app.use(cors());
// http://localhost:3000/product/*
app.use("/product",productRouter);
app.use("/user",userRouter);

app.listen(3000,()=>console.log("Server running on port number 3000"))