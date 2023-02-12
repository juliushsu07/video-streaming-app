const express = require('express')
const {
    getVideoList,
    uploadVideo
} = require('../controllers/videoController') 

const router = express.Router()

// GET video list
router.get('/', getVideoList)

// Upload a new video
router.post('/:id', uploadVideo)

module.exports = router