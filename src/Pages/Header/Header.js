import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="comp-logo">JI Consulting Services</div>
      <nav className="nav-link">
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
