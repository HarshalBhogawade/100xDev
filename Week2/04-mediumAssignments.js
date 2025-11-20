
//1)
//Read a file, remove all the extra spaces and write it back to the same file.
//trim the extra spaces and rewrite the file
// const fs = require("fs");

// function cleanFile(path) {
//   // read file
//   let data = fs.readFileSync(path, "utf8");

//   // replace multiple spaces with a single space
//   let cleaned = data.replace(/\s+/g, " ").trim();

//   // write back
//   fs.writeFileSync(path, cleaned);

//   console.log("File cleaned!");
// }
// // Call it
// cleanFile("input.txt");


//2)
/*
Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?
Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)
HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

let min = 0;
let hr = 0;
let sec = 0;

function timer(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hr++;
    }
    
        
    
    console.log(hr+":"+min+":"+sec);
    setTimeout(() => {
        timer();
    }, 1000);
}

timer();