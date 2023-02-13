import React from 'react'

const VideoDetail = ({video}) => {
  return (
    <div>
      <h2>{video.title}</h2>
      <video controls>
        <source src={`http://localhost:4000/${video.filePath}`}/>
      </video>
    </div>
  )
}

export default VideoDetail;