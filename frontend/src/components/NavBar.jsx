import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-header">
        <img src='../' alt='OZEAN'/>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/best-sellers">Best Sellers</Link></li>
          <li><Link to="/about-us">About us</Link></li>
        </ul>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/liked">Liked</Link></li>
        </ul>
      </div>

      <button className="nav-toggle" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
