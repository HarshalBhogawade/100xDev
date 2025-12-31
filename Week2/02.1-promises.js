// //some assignments on the promises

// const { rejects } = require("assert");
// const { resolve } = require("path");

// //write a function to return promise and resolve "done" after 2 seconds
// function delay2sec() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("done")
//         }, 2000);
//     });
// }
// delay2sec().then(console.log);

// //return promise that resolves success if math.random()>0.5 else reject "fail"
// //use then and catch to log final output
// function m() {
//     return new Promise((resolve, rejects) => {
//         if (Math.random() > 0.5) {
//             resolve("Success");
//         } else {
//             rejects("Fail");
//         }
//     });
// }
// m().then(console.log).catch(console.log);

// /*Convert Callback to Promise
// function add(a, b, callback) {
//   callback(a + b);
// } */
// function add(a, b) {
//     return new Promise((resolve, rejects) => {
//         resolve(a + b),
//         rejects("Enter greater than zero");
//     });
// }
// add(10, 20).then(console.log).catch(console.log);


// /*
// 4. Fetch User and then Posts (Chained Promises)
// Simulate:
// first Promise: fetch user → resolve { id: 1, name: "Harshal" }
// second Promise: fetch posts for that user → resolve an array
// Chain them using .then().
// */

function getuser() {
    return new Promise(
        resolve =>{
            setTimeout(() => {
                resolve({id:2,name:"Harshal"})
            }, 1000);
        }
    )
}

function getposts(userId){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(["post1" , "post2"]);
        }, 1000);
    });
}


getuser().then(user=>{
    console.log("user:",user);
    return getposts(user.id);
})
.then(posts =>{
    console.log("posts:",posts);
})
