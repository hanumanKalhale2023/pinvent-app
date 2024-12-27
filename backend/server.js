const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');


const app= express();

const PORT = process.env.PORT || 5000;

//connect to mongodb and start Server.
mongoose
  .connect("mongodb://localhost/27017/pinvent")
  .then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error)=>console.log(error));