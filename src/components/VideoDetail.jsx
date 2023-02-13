import React from 'react'

const VideoDetail = ({video}) => {
  return (
    <li>
      <p>{video.title}</p>
      <img src={`http://localhost:4000/${video.thumbnail}`}></img>
    </li>
  )
}

export default VideoDetail;