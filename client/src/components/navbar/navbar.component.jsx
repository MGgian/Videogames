import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from '../searchbar/searchbar.component';

const NavBar = () => {
  return (
    <div className='navbar-cont'>
      <div className='navbar-img-cont'>
        <Link to={"/"}><img src="" alt="" /></Link>
      </div>
      <div className='navbar-links-cont'><Link to={"/home"}>Home</Link><Link to={"/create"}>Create</Link></div>

      <div className='navbar-search-cont'><SearchBar/></div>
    </div>
  )
}

export default NavBar;

