import React from 'react'
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const NavBar = ({videos}) => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">
        Eon Media Streaming
      </Link>  
      <Link to="/upload" className="nav-item">
        Upload Video
      </Link>
      <SearchBar className="nav-item"/>
    </nav>
  )
}

export default NavBar;
