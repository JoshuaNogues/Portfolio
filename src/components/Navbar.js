import React from 'react'
import { Link } from "react-router-dom";
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link className="navbar-link" to="/about">About </Link>
        <Link className="navbar-link" to="/projects">Projects </Link>
        <Link className="navbar-link" to="/contact">Contact</Link>
      </nav>
    );
  }
export default Navbar