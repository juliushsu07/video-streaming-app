import { React } from 'react'
import VideoList from "./VideoList"


const Home = ({videos}) => {
  return (
    <div className='home-container'>
      <VideoList videos={videos}></VideoList>
    </div>
  )
}

export default Home;