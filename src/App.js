import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UploadVideo from "./components/UploadVideo"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="container">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
        </Routes>
    </div>
  );
}

export default App;