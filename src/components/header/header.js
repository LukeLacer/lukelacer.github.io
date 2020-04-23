import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className="header">
    <nav class="top">
        <ul class="top__bar">
            <li class="top__item">
                <Link to="/about">ABOUT</Link>
            </li>
            <li class="top__item">
                <Link to="/contact">CONTACT</Link>
            </li>
            <li class="top__item">
                <Link to="/works">WORKS</Link>
            </li>
            <li class="top__item top__item--last">
                <Link to="/hobbies">HOBBIES</Link>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default header;