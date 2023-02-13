const Video = require('../models/videoModel')
const mongoose = require('mongoose')
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg')

mongoose.set('strictQuery', false);

// GET video list
const getVideoList = async (req, res) => {
    const videos = await Video.find({})
    res.status(200).json(videos)
}

// Upload a new video
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage }).single("file")

const uploadFile = async (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.json ({ success: false, err})
        }
        return res.json({success: true, filePath: res.req.file.path, fileName: res.req.file.filaname})
    })
}

// Upload Thumbnail of the Video
const uploadThumbnail = async (req, res) => {
  let thumbsFilePath = "";
  let fileDuration = "";
  ffmpeg.ffprobe(req.body.filePath, function(err, metadata){
    console.dir(metadata);
    console.log(metadata.format.duration)
    
    fileDuration = metadata.format.duration
  })

  ffmpeg(req.body.filePath)
  .on('filenames', function(filenames) {
    console.log('Will generate ' + filenames.join(', '))
    thumbsFilePath = "uploads/thumbnails/" + filenames[0];
  })
  .on('end', function() {
    console.log('Screenshots taken');
    return res.json({success: true, thumbsFilePath: thumbsFilePath , fileDuration: fileDuration})
  })
  .screenshots({
    count: 1,
    folder: 'uploads/thumbnails',
    size:'320x240',
    fileName: 'thumbnail-%i-%s-%b.png'
  });
}

// Save Video in DB
const submitVideo = async (req, res) => {
  const video = new Video(req.body)
    video.save((err, video) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })
}

module.exports = {
    getVideoList,
    uploadFile,
    uploadThumbnail,
    submitVideo,
}