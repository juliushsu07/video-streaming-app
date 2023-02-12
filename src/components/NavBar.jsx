import React from 'react'
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="links">
        Eon Media Streaming
      </Link>  
      <SearchBar />
      <Link to="/upload" className="links">
        Upload Video
      </Link>
    </nav>
  )
}

export default NavBar;
