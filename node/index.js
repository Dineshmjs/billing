const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Port = process.env.PORT || 2000

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json())

const product = require('./router/Product')
const purches = require('./router/Purches')
const sales = require('./router/Sales')
const profit = require('./router/Profit')
const address = require('./router/Address')


app.use("/product",product)
app.use("/purches",purches)
app.use("/sales",sales)
app.use("/profit",profit)
app.use("/address",address)


app.get("/",(req,res)=>{
    res.json("Root")
})


// const url ="mongodb+srv://root:dineshmjs@cluster0-y8uer.gcp.mongodb.net/bill"
const url = "mongodb://localhost:27017/account" 
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify : false }, (err) => {
    if(!err){
        console.log("Mongodb Connectced")
    }
    if(err){
        console.log(err)
    }

})


app.listen(Port, () => {
    console.log("Server run port 2000")
})

