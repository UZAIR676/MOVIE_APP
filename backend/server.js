const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.send("welcome to the server ");

})


app.listen(5000);