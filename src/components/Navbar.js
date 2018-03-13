import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import {HTMLContent} from './Content';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          DH
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/dih7" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
