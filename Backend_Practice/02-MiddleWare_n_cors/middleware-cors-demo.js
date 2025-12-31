/*
Create auth middleware:

Read token from header
Reject missing/invalid token

Read custom headers:
x-client-version
Reject request if version < 2.0*/

const express = require('express');
const app = express();
const requiredVersion = 2.0;

app.use(express.json());

//auth middleware
function authmiddleware(req,res,next){
    const urlapiVersion = Number(req.params.version);
    if(!urlapiversion){
        res.status(400).json({error:"no api key "});
        return;
    }
    if(urlapiVersion!== requiredVersion){
        res.status(403).json({error:'invalid version of api'});
        return;
    }

    next();
}

app.get('./:version',authmiddleware,function(req,res){
    res.json({msg:"api version is upto date"});
})

app.listen(3000,()=>{
    console.log("Server runnning");
})