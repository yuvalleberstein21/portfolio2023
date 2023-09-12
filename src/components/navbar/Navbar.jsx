import React from 'react';
import './navbar.css';
import logo from '../../assets/logo-portfolio-3.png';
import contact from '../../assets/contact.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt={logo} className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">About</Link>
      </div>

      <button className="desktopMenuBtn">
        <img className="desktopMenuImg" src={contact} alt={contact} />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
