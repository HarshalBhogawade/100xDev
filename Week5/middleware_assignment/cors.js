const express = require('express');
const cors = require('cors');

const app = express();

// CORRECT: call cors()
app.use(cors());

app.get('/add', function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a + b
    });
});

app.listen(3000, () => {
    console.log("Server is running");
});
