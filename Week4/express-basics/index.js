// Import the express library so we can create a web server
const express = require("express");

// Create an express application (your server)
const app = express();

// A simple function that returns the sum of numbers from 1 to n
function sum(n) {
    // Variable to store the running total
    let ans = 0;

    // Loop from 0 up to n and add each number to ans
    for (let i = 0; i <= n; i++) {
        ans += i;
    }

    // Return the final answer
    return ans;
}

// Create a route for GET requests at the path "/"
app.get("/", function(req, res){

    // Read the query parameter "n" from the URL
    // Example: if URL is /?n=5 then req.query.n = "5"
    const n = Number(req.query.n);

    // If n is not a valid number, send an error response
    if (isNaN(n)) {
        return res.send("Please provide a valid number using ?n=value");
    }

    // Call the sum function to compute the result
    const ans = sum(n);

    // Send the result back to the user as a response
    res.send("Hi, your answer is " + ans);
});

// Start the server on port 3000
// This keeps the app running and ready to accept requests
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
