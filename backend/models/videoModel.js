const mongoose = require('mongoose')

const Schema = mongoose.Schema

const videoSchema = new Schema({
    title: {
        type:String,
        maxlength:50,
    },
    description: {
        type: String,
    },
    filePath : {
        type: String,
    },
    duration :{
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Video', videoSchema)

