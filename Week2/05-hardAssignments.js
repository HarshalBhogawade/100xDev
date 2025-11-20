/*1)
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("path");

function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, n * 1000);
    })
}

wait(5).then(console.log)

/*2)
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        let i = 0;
        while (i <= milliseconds) {
            i += 1000;
        }
        resolve("Promise resolved");
    })
}

sleep(2000).then(console.log);

/*3)
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function t1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("task1");
        }, 1000);
    })
}
function t2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("task2");
        }, 2000);
    })
}

function t3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("task3");
        }, 5000);
    })
}

function calctime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all(
        [
            t1(),
            t2(),
            t3()
        ]
    ).then(() => {
        const end = Date.now();
        return end - start;
    });
}

console.log(calctime);


/*4) hard one 
5. Simulate ATM transaction
Chain must:
insertCard()
verifyPIN()
fetchAccount()
checkBalance(amount)
debit(amount)
printReceipt()
Each step resolves only if previous step succeeds.
If any step rejects, the entire chain stops and shows the error. */

function insertCard(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Card inseted");
        },300 );
    });
}

function verifyPIN(){
    return new Promise((resolve,reject)=>{
        const correct = true;
        correct ? resolve("Pin OK") : reject("Wrong Pin");
    });
}

function fetchAccount(){
    return new Promise(resolve =>resolve({balance:3000}));
}

function checkBalance(amount){
    return new Promise((resolve,reject) =>{
        amount <= 3000 ? resolve(amount):reject("Insufficient balance");
    });
}

function debit(amount){
    return new Promise(resolve =>{
        resolve("amount debited: "+amount);
    });
}

function printReceipt(){
    return new Promise(resolve =>resolve("reciept Printed"));
}

insertCard()
.then(verifyPIN)
.then(fetchAccount)
.then(() => checkBalance(1500))
.then(debit)
.then(printReceipt)
.then(console.log)
.catch(console.log);