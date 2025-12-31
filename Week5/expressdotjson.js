const express = require('express');
const app = express();
//express.json() is a middleware
app.use(express.json()); //this lets us to post / send json data to the browser or server



app.post('/add',function(req,res){
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans:a+b
    })
})



app.listen(3000, () => {
    console.log("Server is running");
});