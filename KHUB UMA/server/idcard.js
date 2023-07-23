const mongoose = require('mongoose')

const idcardSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    maths : {
        type : Number,
        required : true
    },
    english : {
        type : Number,
        required : true
    },
    python :{
        type:Number,
        required:true

    }
})
const Idcard= mongoose.model('idcard',idcardSchema)
module.exports = Idcard


