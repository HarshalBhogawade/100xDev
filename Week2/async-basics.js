//Sum of first n natural numbers
function sum(n){
    return n*(n+1)/2;
}
let ans = sum(5);
console.log(ans); //15      

//read from file
const fs = require("fs");
function print(err, contents){
    console.log(contents);
}
fs.readFile("a.txt","utf-8",print);

fs.readFile("b.txt", "utf-8",print);

console.log("Hellow how are you");

function run(){
    console.log("I will run after");
}

setTimeout(run,7000);

console.log("I will run first");