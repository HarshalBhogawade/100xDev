//parameters
//difference between query and parameters
//->query
/*/add/:a/:b this is parameter
    we call this is code req.params.a to get val of a */
/*->query 
is route will look like this 
/add?a=10&b=20 
in code cLLED LIKE THIS  
    req.query.a to get val of a
*/

const express = require('express');
const app = express();

app.get('/multiply',function(req,res){ //if you want to use route parameter instead of query parameter
    let a = Number(req.query.a);        //do this /add/:a/:b then change req.query.a => req.params.a 
    let b = Number(req.query.b);
    res.json({
        ans: a*b
    });
});

app.get('/divide',function(req,res){ 
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    res.json({
        ans: a/b
    });
});

app.get('/subtract',function(req,res){
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    res.json({
        ans: a-b
    });
});

app.get('/add',function(req,res){
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    res.json({
        ans: a+b
    });
})



app.listen(3000, () => console.log("server running"));