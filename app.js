const dotenv = require("dotenv");
const mongoose =require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path :'./config.env'});
require('./db/conn');
//const user =require('./model/userSchema');
//const DB = 'mongodb+srv://ateendra2312:ateendra@cluster0.6xofpak.mongodb.net/mernstack?retryWrites=true&w=majority';
app.use(express.json());

//we link the router file to make our router easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;



//middleware :
//            use if u r logging corrcet than ok other wise it show the same page
 const middleware = (req,res,next) => {
    console.log('hello my middleware');
    next();
 }

//app.get('/',(req,res)=>{
  //  res.send('hello world form the server app.js');
//});


/*app.get('/about',(req,res)=>{
    res.send('hello about part form the server');
});*/

app.get('/about',middleware,(req,res)=>{
    console.log('hello my about');
    res.send('hello about part form the server');
});


app.get('/contact',(req,res)=>{
    res.cookie("jwtoken",'Ateendra')
    res.send('hello  contact form the server');
});

app.get('/signin',(req,res)=>{
    res.send('hello signin world form the server');
});

app.get('/signup',(req,res)=>{
    res.send('hello  signup world form the server');
});

app.listen(PORT,() =>{
    console.log('server is runing at port no ${PORT}');

})

