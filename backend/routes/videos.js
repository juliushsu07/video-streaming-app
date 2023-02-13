const express = require('express')
const {
    getVideoList,
    uploadFile, 
    uploadThumbnail,
    submitVideo
} = require('../controllers/videoController') 

const router = express.Router()

// GET video list
router.get('/api/videos', getVideoList)

// Upload a new video
router.post('/api/file', uploadFile)

// Upload a new thumbnail
router.post('/api/thumbnail', uploadThumbnail)

//Submit a video
router.post('/api/video', submitVideo)

module.exports = router