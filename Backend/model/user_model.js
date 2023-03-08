const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        match: /.+\@.+\..+/,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:8
    }
},{timestamps:true});

module.exports = mongoose.model('User_Model',UserSchema);

