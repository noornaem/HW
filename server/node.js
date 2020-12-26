const express=require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
 const app=express();
 app.use(cors());
 app.use(bodyParser.json());
 app.get('/user',(req,res)=>{
    res.json({name:req.query.name,message: "Welcome"});
})
app.post('/user/noor',(req,res)=>{
    res.json({name:req.body.name , message:req.body.massage});
    
})
app.get('/user/noor',(req,res)=>{
    res.json({message: "Welcome"});
})

// app.get('/noor',(req,res)=>{
//     res.json({user:"noor"});
// })
//  app.post('/noor',(req,res)=>{
//      const data=req.body;
//      console.log(data);
//      res.json({success:true});
//  })
 app.listen(3000,()=>{
    console.log('server run');
});