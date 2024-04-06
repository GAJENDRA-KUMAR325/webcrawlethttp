/*
const lib = require('./lib.js');
const fs = require('fs'); 
//const txt = fs.readFileSync('demo.txt','utf-8');
fs.readFile('demo.txt','utf-8',(err,txt)=>{
    console.log(txt);
})
//console.log(txt);
console.log(lib.sum(10,20));
import {sum,diff} from './lib.js';
console.log(sum(10,20),diff(10,20));
//console.log(diff(60-20));
*/

/*
const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html",'utf-8');
const content = JSON.parse(fs.readFileSync("data.json",'utf-8'));
const products = content.products;
const server = http.createServer((req,res)=>{
    console.log(req.url);
     console.log("server started");
     if(req.url.startsWith("/product"))
     {
        const id = req.url.split('/')[2];
        const Product = products.find(p=>p.id===(+id));
        console.log(Product);
        res.setHeader('Content-Type','text/html');
        let modifiedindex =index.replace('**title**',Product.title).replace('**description**',Product.description).replace('**url**',Product.thumbnail);
        res.end(modifiedindex);
        return;
     }
     switch(req.url){
        case "/" :
            res.setHeader('Content-Type','text/html')
            res.end(index);
            break;
        case "/json" : 
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(content));
        break;
        default :
        res.writeHead(404,"Page Not Found");
        res.end();
     }
})
server.listen(8080);
*/
/*
const fs = require("fs");
const index = fs.readFileSync("index.html",'utf-8');
const content = JSON.parse(fs.readFileSync("data.json",'utf-8'));
const products = content.products;
const {resolve} = require('path');
const express = require("express");
const morgan = require("morgan");
const absolutePath = resolve('index.html');
console.log(absolutePath);
const server = express();


server.use(morgan('default'));
*/
/*
server.use((req,res,next)=>{
    console.log(req.get('User-Agent'),req.method,req.ip,req.hostname);
    next();
})
*/
//BodyParser
//server.use(express.json());
//server.use(express.urlencoded());
//server.use(express.static('public'))
/*
const auth = (req,res,next) =>{
    if(req.query.password == '123'){
        next();
    }
    else{
        res.sendStatus(401);
    }
}*/
/*
const auth = (req,res,next) =>{
    if(req.body.password == '123'){
        next();
    }
    else{
        res.sendStatus(401);
    }
}
//server.use(auth);
server.get("/product/:id",auth,(req,res)=>{
    console.log(req.params);
    res.json({type:'GET'})
})
server.post("/",auth,(req,res)=>{
    res.json({type : "POST"});
})
server.put("/",(req,res)=>{
    res.json({type : "PUT"});
})
server.delete("/",(req,res)=>{
    res.json({type : "DELETE"});
})
server.patch("/",(req,res)=>{
    res.json({type : "PATCH"});
})
server.get('/demo',(req,res)=>{
    //res.send("<h1>Hello Everyone</h1>");
    //res.sendFile(absolutePath);
    res.json(products);
    //res.sendStatus(404);
})
server.listen(8080,()=>{
    console.log("Server Started");
});
*/
require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const server = express();
const productRouter = require("./Router/product");
const userRouter = require("./Router/user")
console.log('env',process.env.DB_PASSWORD);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Database Connected");
}



//bodyParser
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products",productRouter.router);
server.use("/users",userRouter.router)



server.listen(8080,()=>{
    console.log("Server Started");
});