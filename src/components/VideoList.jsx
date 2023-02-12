import React from 'react'
import VideoDetail from "./VideoDetail"

const VideoList = () => {
  return (
    <div className='video-list-container'>
        <section className=''>
            Now Playing
        </section>
        <section className=''>
            <ul>
                <li><VideoDetail/></li>
                <li><VideoDetail/></li>
                <li><VideoDetail/></li>
            </ul>
        </section>
    </div>
  )
}

export default VideoList;