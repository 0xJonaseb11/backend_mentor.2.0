// we gonna to createserver
const https=require('http');
const fs=require('fs');
const express=require('express');
https.createServer((req,res)=>{
    res.writeHead(200,{
        'contnet_type':'text/html'
    }
        );
        res.end('welcom e to my website')

}).listen(8080)
//create file
const fs=require('fs');
fs.createFile('kevin/txt','welcome to my site',(error)=>{
    if(error){
        console.log("plz the fs is failed try another way ")
    }
    else{
      console.log('thank you to create file is successfuu')  
    }
})

