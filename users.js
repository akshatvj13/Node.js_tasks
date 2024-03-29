const { MongoGridFSChunkError } = require('mongodb')
const mongoose = require('mongoose')

users_schema = new mongoose.Schema({
    firstName :{
        type:String,
        required: true
    },
    lastName :{
        type:String,
        required:true,
    },
    mobileNumber :{
        type:Number,
        required:true,
    },
    email :{
        type : String,
        required :true,
        unique:true,

    },
    street :{
        type : String,
        required :true,
    },
    city :{
        type : String,
        required :true,
    },
    state :{
        type : String,
        required :true,
    },
    country :{
        type : String,
        required :true,
    },
    loginId :{
        type : String,
        required :true,
        unique :true
    },
    password :{
        type : String,
        required :true,
        unique : true,
    }
},
{
    timestamps:true,

}

)

const User = mongoose.model('users',users_schema);

module.exports = User;