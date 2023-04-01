const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasteSchema= new Schema({
    username:{
        type:String,
    },
    text:{
        type:String,
    }
},{timestamps:true,versionKey:false});

module.exports = mongoose.model('Paste_Model',PasteSchema);

