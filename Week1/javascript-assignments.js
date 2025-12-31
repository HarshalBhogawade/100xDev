//assignment1 
//get two numbers from the user and consolelog the sum 
let num1 = Number(prompt("Enter the number 1: "));
let num2 = Number(prompt("Enter the number 2: "));

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(num1, num2));


//assignment 2 : write function canVote if age >= 18 can vote else not 
let age = Number(prompt("Enter the age: "));
function canVote(age) {
    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("You cannot vote");
    }
}
canVote(age);


//assignment no 3 : 
//Write an if/else statement that checks if a number is even or odd.
//If it's even, print "The number is even." Otherwise, print "The number is odd.
let num = Number(prompt("Enter the number: "));

if (num % 2 == 0) {
    console.log("Number is even " + num);
} else {
    console.log("Num is odd" + num);
}

//assignment no 4 :
//Write a function called sum that finds the sum from 1 to a number

let n = Number(prompt("ENter the number"));
let sum1 = 0;
function sum(n) {
    for (i = 1; i <= n; i++) {
        sum1 += i;
    }
    return sum1;
}

console.log("Sum from 1 to " + n + " is: " + sum(n));

//complec types : object and array 
//assignment 1
//Write a function that takes a new object as input which has name ,
//age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21
//also tell if they are legal to vote
let user = {
    name: "Harshal",
    age: 20,
    gender: "Male"
}

function greet(user) {
    console.log("Hi Mr" + user.name + "your age is " + user.age + "Your gender is " + user.gender);
    if (user.age >= 18) {
        console.log("Legal to vote");
    } else {
        console.log("Not legal to vote");
    }
}
greet(user);

//Write a function that takes an array of numbers as input,
//and returns a new array with only even values. Read about filter in JS
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = arr.filter(number => number % 2 == 0);
console.log(newArray);

//Write a function that takes an array of users as inputs
//and returns only the users who are more than 18 years old
const persons = {
    user1:{
        name :"Harshal",
        age :20
    },
    user2:{
        name:"Aniket",
        age:18
    },
    user3:{
        name:"Divya",
        age:"22"
    }
}

function is18(persons){
    for(let key in persons){
        let a = persons[key].age;
        if(a>18){
            console.log(persons[key].name);
        }
    }
}
is18(persons);

