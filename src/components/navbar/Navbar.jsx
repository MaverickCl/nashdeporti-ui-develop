import React from 'react'
import './navbar.css'
import logo from'./logo.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-warning'>
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
            <img className='logo' src={logo} alt="" />
          </Link>
        </li>
        
     
      </ul>

    </nav>

  )
}

export default Navbar