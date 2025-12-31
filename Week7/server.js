const express = require('express');
const {userModel , todoModel} = require('./db')
const jwt = require('jsonwebtoken');
const {auth, JWT_KEY} = require('./auth');
const app = express();
const mongoose = require('mongoose');
//connects our mongodb cluster with this nodecode for inserting data in db 
mongoose.connect("mongodb+srv://harshalbhogawade1_db_user:harshal2508@cluster0.cvsqrhw.mongodb.net/todo-app-db"); 
app.use(express.json());


const JWT_KEY = 'icode';
//always use async await for db operations 
//signup
app.post('/signup', async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    //insert in userModel == users document
    await userModel.create({
        name : name,
        email: email,
        password : password
    })

    res.json({
        message : 'your signed up'
    });

});

//login , creates 
app.post('/login',async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    
    const user = await userModel.findOne({
        email : email,
        password : password
    })


    if(user){

        //creating token 
        const token = jwt.sign({
            id : user._id.toString()
        },JWT_KEY);

        res.json({
            token : token
        });

    }else{
        res.status(403).json({
            message:'Enter correct email and pass'
        });
    }
});

//add todo -> only when user is logged in add todo (authenticated route)
app.post('/todo',auth, async function(req,res){
    const userId = req.userId;
    const todo = req.body.todo;
    const done = req.body.done;

    await todoModel.create({
        userId,
        todo,
        done
    });

    res.json({
        todo
    });

});

//get all the todos - > only user is logged in get todos (authenticated route)
app.get('/todos',auth, async function(req,res){
    const userId = req.userId;

    const todos = await todoModel.findOne({
        userId
    });

    res.json({
        todos
    });

});

app.listen(3000, () =>{
    console.log("Server is running");
})

