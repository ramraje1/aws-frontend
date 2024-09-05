import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar=()=>{
  return( 
  <nav>
    <Link to="/">
    <div>
          <img src="https://www.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/>
          <h3>GitHub</h3>
          </div>
          </Link>
          <div>
            <Link to="/create">
            <p>Create the Repo</p></Link>
            <Link to="/profile">
            <p>profile</p></Link>
          </div>
  </nav>
  )
}
export default Navbar;