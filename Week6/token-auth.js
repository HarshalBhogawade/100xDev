const express = require('express');
const app = express();
app.use(express.json());

let users = [];

///generates randome token for existing user, when he signs in w password
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
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

        const token = generateToken(); // generates the token 
        user.token = token; //{usename: xyz , password : abc , token: 232u498ihrfd} , this strucure become 
        res.status(200).json({
            message:'token is generated'
        });

    }
});

//creating an endpoint /me which shows user information like username and password.
//only when user enters its token 
app.get('/me',function(req,res){
    const token = req.headers.token;

    const user = users.find( user => user.token == token);

    if(!user){
        res.json({
            message:'wrong token'
        })
    }else{
        const name = user.username;
        const pass = user.password;
        res.json({
            username:name,
            password: pass,
            token:token,
        });
    }
})

app.listen(3000,() =>{
    console.log("Server is running");
});