import React from 'react'
import { Link } from "react-router-dom";
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import logo from '../images/logo.png'

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link className='navnar-link' to='/'><img className='logo' src={logo} alt='logo'/></Link>
        <Link className="navbar-link" to="/about">About </Link>
        <Link className="navbar-link" to="/projects">Projects </Link>
        <Link className="navbar-link" to="/contact">Contact</Link>
      </nav>
    );
  }
export default Navbar