//popular internal packages of nodejs 
//1) fs- filesystem
//in slide

//2) path - path related functions 
const path = require("path"); //imports built in nodejs path module
console.log(__dirname); //returns the path of the current file , means current file directory
console.log(path.join(__dirname,"index.js")); //this one combines directory path with the filename index.js
//path.join joins safely joins  both the path segment together 

//3)http - creates http servers 