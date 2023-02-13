import { React, useEffect, useState} from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UploadVideo from "./components/UploadVideo"
import { Route, Routes } from "react-router-dom"
import axios from "axios"

function App() {
  const [videos, setVideos] = useState()
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/videos')
    .then((res) => {
      const videos = [...res.data];
      setVideos(videos);
    })
    .catch((err) => console.log(err.response));
}, []);

  return (
    <div className="container">
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path="/" element={<Home videos={videos} searchTerm={searchTerm} />} />
          <Route path="/upload" element={<UploadVideo />} />
        </Routes>
    </div>
  );
}

export default App;