const videos = require('../models/videoModel')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

// GET video list
const getVideoList = async (req, res) => {
    const video = await video.find({}).sort({createdAt: -1 })
    res.status(200).json(videos)
}

// Upload a new video
const uploadVideo = async (req, res) => {
}

module.exports = {
    getVideoList,
    uploadVideo,
}