import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-portfolio-3.png';
import contact from '../../assets/contact.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menuIcon from '../../assets/menuIcon1.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt={logo} className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='socials' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Socials</Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img className="desktopMenuImg" src={contact} alt={contact} />
        Contact Me
      </button>


      <img src={menuIcon} width={50} height={50} alt='menu' className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='socials' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  );
};

export default Navbar;
