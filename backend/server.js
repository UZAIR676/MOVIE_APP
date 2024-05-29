const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.send("welcome to the server ");

})
console.log("server is running on port 5000")


app.listen(5000);