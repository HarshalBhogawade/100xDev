const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

//schema is defined here
const user = new Schema({
    name : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    password : { type: String, required: true }
});

const todo = new Schema({
    userId : { type: ObjectId, ref: 'users', required: true },
    todo: { type: String, required: true },
    done : { type: Boolean, default: false }
});

const userModel = mongoose.model('users',user);
const todoModel = mongoose.model('todos',todo);

module.exports = {
    userModel,
    todoModel
}

