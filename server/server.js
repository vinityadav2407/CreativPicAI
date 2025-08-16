const express=require("express");
let app=express();

let port=8080;

app.listen(port,()=>{
    console.log("server is working on port 8080");
})