const express = require('express');

const app = express();

app.get('/error',(req,res)=>{
    res.send('<h1 style="text-align:center; font-size:200px">error 404</h1>')
})
app.listen(8080,()=>{
    console.log("connected!!!")
})