const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const JWT_KEY = "harshallovestocode";
let users = [];


app.get('/users',function(req,res){
    res.json(users);
})

app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    //checking if already signed in  : making sure that user can signup two times 
    if(users.find(u=> u.username ==username)){
        res.status(400).json({
            error:'you have already signed up'
        })
        return;
    }

    const userPass = {
        username,
        password
    };
    users.push(userPass);
    res.json({
        message:'You have logged in'
    })
});

app.post('/signin',function(req,res){

    const username = req.body.username;
    const password = req.body.password;
    
    //finding user with the entered username and password
    const user = users.find(user => user.username == username && user.password == password);

    //if no user means wrong password or username entered
    if(!user){

        res.status(400).json({
            error: 'You entered wrong username or password'
        });

    }else{ //user exists  with corrct name and password so generaste token and assign token to the user 
        const token = jwt.sign({
            username:username
        },JWT_KEY) // generates the token 
        user.token = token; //{usename: xyz , password : abc , token: 232u498ihrfd} , this strucure become 
        res.status(200).json({
            message:'token is generated'
        });
    }
});

//creating an endpoint /me which shows user information like username and password.
//only when user enters its token 
function auth(req,res,next){
    const token  = req.headers.token;
    const decodeuserinformation = jwt.verify(token,JWT_KEY); //{username : abcdef} assigns jwt object to decodeinformation variable
    const username =  decodeuserinformation.username;
    if(!username){
        res.json({
            error:'user is not logged in '
        })
        return;
    }else{
        req.username = username;
        next();
    }
}
app.get('/me',auth,function(req,res){

    
    const user = users.find( user => user.username == req.username);

    
    
        const name = user.username;
        const pass = user.password;
        res.json({
            username:name,
            password: pass,
        });
    
});

app.listen(3000,() =>{
    console.log("Server is running");
});