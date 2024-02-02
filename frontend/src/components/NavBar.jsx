import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        {isOpen ? (
          <span className="exit-icon">&#10005;</span>
        ) : (
          <div className="hamburger-menu">
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
          </div>
        )}
      </button>
      <div className='nav-header'>
        <img className='nav-logo' src='../' alt='OZEAN'/>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/best-sellers" activeClassName="active">Best Sellers</NavLink></li>
            <li><NavLink to="/about-us" activeClassName="active">About us</NavLink></li>
          </ul>
        </div>
        <div className={`nav-links mobile-hidden ${isOpen ? '' : 'hide-on-mobile'}`}>
          <ul>
            <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
            <li><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>
            <li><NavLink to="/liked" activeClassName="active">Liked</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;