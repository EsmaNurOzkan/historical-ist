import React, { useState } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 991) { 
      setIsNavOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src="/imgs/pinIcon.png" alt="Logo" className="navbar-logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav sm-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hotels">
              Hotels
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/places">
              Things to do
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">
              About us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
