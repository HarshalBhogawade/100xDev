/*1)assignment1 : Create a middleware function that logs
 each incoming request’s HTTP method, URL, and timestamp to the console:
 
 2)Create a middleware that counts total number of
  requests sent to a server. Also create an endpoint that exposes it*/

const express = require('express');
const app = express();

//1)
function loginfo(req,res,next){
    console.log(req.url);
    console.log(req.method);
    console.log(Date.now());
    next();
}

//2)
let countreqs = 0;
function count(req,res,next){
    countreqs++;
    next();
}



app.use(count);

app.get('/add/:a/:b',loginfo,function(req,res){
    
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        ans:a+b
    })
})

app.get('/mult/:a/:b',loginfo,function(req,res){
    
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        ans:a*b
    })
})

//2)
app.get('/requests',function(req,res){
    res.json({
       countofrequests:countreqs
       
    })
    
});

app.listen(3000, () => {
    console.log("Server is running");
})

