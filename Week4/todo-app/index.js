//creating a express server for the todo app 

//task 1: create a todo simple (no presistent data)
//task2 : Add data persistency using todos.json obj
//task3 : add users so that each user have its own set of todos
const fs =  require("fs/promises");
const express = require('express');
const app = express();
app.use(express.json());
const FILE = "data.json";

//create todo => post
//read todo / show todos => get
//update todo  => put 
//delete todo => delete method 

//notes:
/*req (request) → used to receive data from the client
res (response) → used to send data from the server
req means data coming from client to server
res means data coming from server to clint 
so if you want to display something on route do like => res.send("Hellow world")*/

//functions to read data from json file
async function read() {
  const data = await fs.readFile(FILE, "utf-8");
  return JSON.parse(data);
}

// function to write updated JS object back to data.json
async function write(data) {
  await fs.writeFile(FILE, JSON.stringify(data, null, 2));
}


//routes
//post /users/:userId/todos 
//body wil be like
//body:{"title":"task"}
app.post("/users/:userId/todos", async(req, res) =>{
  // get userId from URL
  const userId = req.params.userId;
  // get title from request body
  const title = req.body.title;
  // validation
  if (!title) return res.status(400).send("Title required");

  // read existing data from file
  const data = await read();

  // if user does not exist, create empty todo list
  if(!data.users[userId]){
    data.users[userId] = [];
  }

  // create new todo object
  const todo = { id: Date.now(),title};

  // add todo to user's list
  data.users[userId].push(todo);

  // save updated data back to file
  await write(data);

  // send created todo as response
  res.json(todo);
});

//READ TODOS
//GET /users/:userId/todos
app.get("/users/:userId/todos", async (req, res) => {
  // get userId from URL
  const userId = req.params.userId;

  // read data from file
  const data = await read();

  // check if user exists
  if (!data.users[userId]) {
    return res.status(404).send("User not found");
  }

  //send user's todos
  res.json(data.users[userId]);
});

//UPDATE TODO
//PUT /users/:userId/todos/:id
//body: { "title": "new title" }
app.put("/users/:userId/todos/:id", async(req,res) =>{
  // get userId and todo id from URL
  const userId = req.params.userId;
  const id = Number(req.params.id);

  // get new title from body
  const title = req.body.title;

  // validation
  if (!title) return res.status(400).send("Title required");

  // read data
  const data = await read();

  // check if user exists
  const todos = data.users[userId];
  if (!todos) return res.status(404).send("User not found");

  // find todo by id
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).send("Todo not found");

  // update title
  todo.title = title;

  // save updated data
  await write(data);

  res.send("Updated");
});

//DELETE TODO
//DELETE /users/:userId/todos/:id
app.delete("/users/:userId/todos/:id", async (req, res) => {
  // get userId and todo id
  const userId = req.params.userId;
  const id = Number(req.params.id);

  // read data
  const data = await read();

  // check if user exists
  const todos = data.users[userId];
  if (!todos) return res.status(404).send("User not found");

  // remove todo using filter
  data.users[userId] = todos.filter(t => t.id !== id);

  // save updated data
  await write(data);
  res.send("Deleted");
});



//start server on port3000
app.listen(3000, () => console.log("Server running"));