const express = require('express');
// const bodyParser = require('body-parser');

const app=express();
app.use(express.json());
app.use(express.static('public'));

//api routing
app.post('/register',(req,res)=>{
    console.log('User data recieved',req.body);
    res.sendStatus(200);
})

app.listen(3000,()=>{
    console.log("server is running on PORT 3000")
});

