const express = require('express')
const app = express()

const port = 4000

app.get("/",(req,res)=>{res.send("<h1>Hello World</h1>")})

app.get("/:URL",(req,res)=>{
    const {URL}= req.params
    res.send(`<h1>no page called ${URL} exists</h1> <a href='/'>back to Home page</a>`)})



app.listen(port,()=>{console.log(`server started on port number ${port}`)})