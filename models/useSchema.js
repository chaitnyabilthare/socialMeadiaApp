// const { name } = require('ejs')
var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:[true,"name is required"],
        minlength:[4,"username must be four characters long"],

    },
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"username is required"],
        minlength:[4,"username must be four characters long"],

    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true,"email is required"],
        
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password:String,


   },
   {timestamps:true}

)

const user = mongoose.model("user",userSchema);

module.exports=user;