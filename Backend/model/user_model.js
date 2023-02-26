const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    paste_data:[
        {
            type: Schema.Types.ObjectId,
            ref:"Paste_Model"
        }
    ]
},{timestamps:true});

module.exports = mongoose.model('User_Model',UserSchema);

