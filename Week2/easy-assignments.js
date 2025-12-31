//1)
//try to code a counter in Javascript It should go up as
//time goes by in intervals of 1 second
let counter = 0;
const timer = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter > 10) {
        clearInterval(timer);
    }
}, 1000);


//2)implement same but using set timeout
let count = 0;
function cnt() {
    
    count++;
    console.log(count);
    if(count == 10) return;
    setTimeout(() => {
        cnt();
    }, 1000);
}
cnt();
