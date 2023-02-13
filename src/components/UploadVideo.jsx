import React, {useState, useRef} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const UploadVideo = () => {
  const form = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filePath, setFilePath] = useState("");
  const [duration, setDuration] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.currentTarget.value);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.currentTarget.value);
  }
  
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      hearder: { 'content-type': 'multipart/form-data'}
    }

    formData.append("file", files[0])
    axios.post('/api/file', formData, config)
    .then(res => {
      if(res.data.success){
        let file = {
          filePath: res.data.filePath,
          fileName: res.data.fileName
        }
        setFilePath(res.data.filePath)

      axios.post('/api/thumbnail', file)
        .then(res => {
          if(res.data.success){
            setDuration(res.data.fileDuration)
            setThumbnail(res.data.thumbsFilePath)
          } else {
            alert('Failed to make the thumbnails');
          }
        })

      } else {
        alert('failed to save the video in server');
      }
    })
  }

  const submitVideo = (e) => {
    e.preventDefault();

    if(filePath === "") {
      return alert('Please Upload a Video File first!')
    }
    const videoDetail = {
      title: title,
      description: description,
      filePath: filePath,
      duration: duration,
      thumbnail: thumbnail,
    }

    axios.post('/api/video', videoDetail)
    .then(res => {
      if(res.data.success) {
        alert('File Uploaded!');
        e.target.reset()
      } else {
        alert('Failed to upload video')
      }
    })
  };

  return (
    <div className='upload-video-container'>
      <form ref={form} onSubmit={submitVideo}>
        <Dropzone 
          onDrop={onDrop}
          required 
        >
          {({getRootProps, getInputProps}) => (
              <div className='dropzone' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
          )}
        </Dropzone>

        <h5>Video Title</h5>
        <input 
          type='text' 
          name='video-title' 
          placeholder='Please enter a title...' 
          value={title}
          onChange={handleChangeTitle}
          required 
        />

        <h5>Video Description</h5>
        <textarea 
          type='text' 
          name='video-description' 
          row='7' 
          placeholder='Please enter a description...' 
          value={description}
          onChange={handleChangeDescription}
          required 
        />
        <br></br>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default UploadVideo;