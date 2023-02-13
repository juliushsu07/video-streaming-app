import { React } from 'react'
import VideoList from "./VideoList"


const Home = ({videos, searchTerm}) => {
  return (
    <div className='home-container'>
      <VideoList videos={videos} searchTerm={searchTerm}></VideoList>
    </div>
  )
}

export default Home;