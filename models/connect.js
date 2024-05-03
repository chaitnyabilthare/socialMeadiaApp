var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/social-media").then(console.log("coonection stablised")).catch((err)=>{console.log(err.message)})