/*
Build a REST API for notes:
GET /notes
POST /notes
DELETE /notes/:id
In-memory storage
Proper status codes
*/
let notes = [];

const express = require('express');
const app = express();
app.use(express.json());
//restapi for notes

app.get('/notes',function(req,res){
    res.status(200).json(notes);
});

app.post('/notes',function(req,res){
    const title = req.body.title;

    if(!title){
        res.status(400).json({error:'no title in body'});
        return;
    }
    const newnote  = {
        id:Date.now(),
        title
    }
    notes.push(newnote);
    res.json(newnote);
    
});

app.delete('/notes/:id',function(req,res){
    const id = Number(req.params.id);
    if(!id){
        res.status(404).json({error:'no specified id'});
        return;
    }

    notes = notes.filter(note => note.id !== id);
    res.status(200).json({done: "notes sucessfully deleted"});
});

app.listen(3000,()=>{
    console.log('server is running');
})