const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/practice-api').then(()=>{
    console.log("DataBase connected Successfully")
}).catch((e)=>{
    console.log(e)
})