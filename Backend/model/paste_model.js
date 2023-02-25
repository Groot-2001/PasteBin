const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasteSchema= new Schema({
    username:{
        type:String,
        unique:true
    },
    text:{
        type:String 
    }
},{timestamps:true});

module.exports = mongoose.model('Paste_Model',PasteSchema);

