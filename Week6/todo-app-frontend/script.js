// ============ TODO APP WITH JWT AUTHENTICATION ============
// This backend handles user authentication & todo management
// Architecture: Express server with in-memory storage (arrays)

const express = require('express');
const jwt = require('jsonwebtoken');  // For generating & verifying tokens
const cors = require('cors');          // Allow cross-origin requests from frontend

const app = express();
app.use(express.json());  // Parse JSON request bodies
app.use(cors());          // Enable CORS for all routes

// ============ DATA STORAGE (In-Memory) ============
const JWT_KEY = "harshallovestocode";  // Secret key for signing JWT tokens
let users = [];        // Stores: [{username, password, token}]
let todos = [];        // Stores: [{id, username, task, completed}]
let todoIdCounter = 1; // Auto-increment ID for todos

app.get('/users',function(req,res){
    res.json(users);
})


// ============ SIGNUP ROUTE ============
// POST /signup - Creates new user account
// Body: {username, password}
app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    // Check if user already exists (prevent duplicate accounts)
    if(users.find(u=> u.username===username)){
        res.status(400).json({
            error:'you have already signed up'
        })
        return;
    }

    // Create new user object and add to users array
    const userPass = {
        username,
        password  // ⚠️ In production: NEVER store plain text passwords! Use bcrypt
    };
    users.push(userPass);
    res.json({
        message:'You have logged in'
    })
});

// ============ SIGNIN ROUTE ============
// POST /signin - Authenticates user & returns JWT token
// Body: {username, password}
app.post('/signin',function(req,res){

    const username = req.body.username;
    const password = req.body.password;
    
    // Find user with matching username AND password
    const user = users.find(user => user.username === username && user.password === password);

    // If no match found, credentials are invalid
    if(!user){

        res.status(400).json({
            error: 'You entered wrong username or password'
        });

    }else{ 
        // User authenticated! Generate JWT token
        // Token contains username (payload) signed with secret key
        const token = jwt.sign({
            username:username  // Payload: data embedded in token
        },JWT_KEY) // Sign with secret key
        
        user.token = token; // Store token in user object (optional)
        
        // Send token to frontend (frontend stores in localStorage)
        res.status(200).json({
            token : token
        });

    }
});

// ============ AUTH MIDDLEWARE ============
// Protects routes - verifies JWT token before allowing access
// Used in: /me, /todos (all todo routes)
function auth(req,res,next){
    // Extract token from request headers (frontend sends: {headers: {token: '...'}})
    const token  = req.headers.token;
    
    // Verify token using JWT_KEY and decode payload
    const decodeuserinformation = jwt.verify(token,JWT_KEY); // Returns: {username: 'john'}
    const username =  decodeuserinformation.username;
    
    if(!username){
        res.json({
            error:'user is not logged in '
        })
        return;
    }else{
        // Attach username to req object for use in route handlers
        req.username = username;  // Now all routes can access logged-in user via req.username
        next();  // Pass control to next middleware/route handler
    }

}
app.get('/me',auth,function(req,res){

    
    const user = users.find( user => user.username === req.username);
        const name = user.username;
        const pass = user.password;
        res.json({
            username:name,
            password: pass,
        });
    
});

// ============ TODO ROUTES (Protected by auth middleware) ============

// CREATE TODO - POST /todos
// Body: {task: 'Buy milk'}
app.post('/todos',auth, function(req,res){
    const task = req.body.task;
    if(!task){
        return res.status(400).json({error : 'task isrequired'})
    }

    // Create new todo linked to logged-in user (via req.username from auth middleware)
    const newTodo = {
        id:todoIdCounter++,      // Auto-increment ID
        username : req.username, // Link todo to user
        task :task,
        completed :false
    };

    todos.push(newTodo);
    res.json(newTodo);
})

// READ TODOS - GET /todos
// Returns only todos belonging to logged-in user
app.get('/todos',auth,function(req,res){
    
    // Filter todos by username - each user sees only their own todos
    const userTodos =  todos.filter(todo=>todo.username ===req.username);
    res.json(userTodos);
})

// UPDATE TODO - PUT /todos/:id
// Body: {task: 'new task'} or {completed: true}
app.put('/todos/:id',auth,function(req,res){
    const id = Number(req.params.id);  // Get ID from URL params
    
    // Find todo with matching ID AND username (security: user can only update their own todos)
    const todo = todos.find(t=>t.id === id && t.username === req.username);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    // Update only fields provided in request body
    if (req.body.task !== undefined) todo.task = req.body.task;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;
    
    res.json(todo);
})

// DELETE TODO - DELETE /todos/:id
app.delete('/todos/:id', auth, function(req, res) {
    const id = Number(req.params.id);
    
    // Find index of todo (with username check for security)
    const index = todos.findIndex(t => t.id === id && t.username === req.username);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    todos.splice(index, 1);  // Remove todo from array
    res.json({ message: 'Todo deleted' });
});

app.listen(3000,() =>{
    console.log("Server is running");
});
