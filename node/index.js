const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json())

const product = require('./router/Product')

app.use("/product",product)

app.get("/",(req,res)=>{
    res.json("Root")
})

mongoose.connect("mongodb://localhost:27017/",{ useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("Mongodb Connectced")
    }
    if(err){
        console.log(err)
    }
})

app.listen(2000,()=>{
    console.log("Server run port 2000")
})

