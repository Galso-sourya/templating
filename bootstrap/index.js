const express=require("express");
const app=express();
const PORT=8000;
const todos=[
    "a","b"
]
const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/blog",(req,res)=>{
    res.render("blog");
})
app.get("/todos",(req,res)=>{
    res.render("todos",{todos});
})
app.listen(PORT,(req,res)=>{
 console.log(`server is running at port ${PORT}`);   
});