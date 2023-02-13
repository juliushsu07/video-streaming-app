import React from 'react'
import VideoDetail from "./VideoDetail"

const VideoList = ({videos, searchTerm}) => {  
  return (
    <div className='video-list-container'>
        <section>
            <ul>
            {videos && videos.filter((item) => {
              return item.title.toLowerCase().includes(searchTerm.toLowerCase());
            }).map(video => (
              <VideoDetail key={video._id} video={video}/>
            ))}
            </ul>
        </section>
    </div>
  )
}

export default VideoList;