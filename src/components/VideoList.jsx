import React from 'react'
import VideoDetail from "./VideoDetail"

const VideoList = ({videos}) => {
  // console.log(videos)
  return (
    <div className='video-list-container'>
        <section className=''>
          
        </section>
        <section className=''>
            <ul>
            {videos && videos.map(video => (
              <VideoDetail key={video._id} video={video}/>
            ))}
            </ul>
        </section>
    </div>
  )
}

export default VideoList;