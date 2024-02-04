import express from "express";
const app=express();
app.listen(2214);

app.get("/",(req,res)=>{
    res.render("index.ejs", { content: "Waiting for data..." });
});