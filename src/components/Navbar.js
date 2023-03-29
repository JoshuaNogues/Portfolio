import React from 'react'
import { Link } from "react-scroll";
import logo from '../images/logo.png'

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link className='navnar-link' to='/'><img className='logo' src={logo} alt='logo'/></Link>
        <Link className='navbar-link' to="about" smooth={true} duration={500}>About</Link>
        <Link className='navbar-link' to="projects" smooth={true} duration={500}>Projects</Link>
        <Link className='navbar-link' to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    );
  }
export default Navbar