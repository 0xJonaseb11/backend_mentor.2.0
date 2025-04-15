 const express=require('express');
 const app=express.router();

 let router= {

'/':function index(req,res){
    res.send('welcome again');
},


'/home/adv':function adv(req,res){


    res.writeHead(200);
    res.end('hello');
}


 }
 app.lisen(123);