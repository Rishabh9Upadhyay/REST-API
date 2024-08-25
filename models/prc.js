const mongoose = require('mongoose')
const validator = require('validator')

const practiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    NV: {
        type: Number,
        validator(value){
            if(value<0){
                throw new Error("Number of video can't be negative")
            }
        }
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const prcCol = new mongoose.model("PrcCol",practiceSchema)

module.exports = prcCol;