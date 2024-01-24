const express=require("express")
const app=express()

app.get('/',(req,res)=>{
res.send("Hello World232")
})
app.get('/users',(req,res)=>{
res.send("this is users api")
})

app.listen(8000,()=>{
    console.log("Server is running at 8000")
})