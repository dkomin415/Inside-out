import React from 'react';
import './navbar.css';

function Navbar() {

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label='camera'> 📸</span> Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx=2">
            <a href='#welcome'>
              Welcome
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
} 

export default Navbar;