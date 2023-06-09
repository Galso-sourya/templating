const express=require("express");
const app=express();
//here setting path is compulsory
const path=require("path");
//configure express to templating
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const todos=[
    "a","b"
]
//get request to view my template
app.get("/hello",(req,res)=>{
    res.render("index"); //file name without extension
});
app.get("/random",(req,res)=>{
    res.render("random");
});
app.get("/todos",(req,res)=>{
    res.render("todos",{todos})
})
app.listen("5000",(req,res)=>{
    console.log("server starting at 5000");
})