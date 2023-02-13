import {React, useState, useRef} from 'react'
import { Link } from "react-router-dom"

const NavBar = ({searchTerm, setSearchTerm}) => {
  const searchTermRef = useRef(undefined);
  
  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const onSearch = () => {
  }  
  
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">
        Eon Media Streaming
      </Link>  
      <Link to="/upload" className="nav-item">
        Upload Video
      </Link>
      <div className="search-bar">
          <input 
            onChange = {(e) => onChange(e)}
            type="text" 
            placeholder="Search a video..." 
            ref={searchTermRef}
          />
          <button onClick={()=>onSearch()}>Search</button>
        </div>
    </nav>
  )
}

export default NavBar;
