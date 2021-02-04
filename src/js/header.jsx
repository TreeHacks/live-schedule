import React from 'react';
import * as logo from '../svg/logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
// import Timer from './timer.jsx';

function Header() {
  return(
    <nav id="header">
      <ul className="container">
        <li id="header-logo">
          <a href="/">
            <img src={logo} alt="treehacks small logo"/>
            <span className="logo-text-tree">tree</span>
            <span className="logo-text-hacks">hacks</span>
            <span className="logo-text-live">live</span>
          </a>
        </li>
        <SocialMedia />
      </ul>
    </nav>
  );
}

function SocialMedia() {
  return(
    <div id="social-media">
      <a href="https://www.instagram.com/stanfordtreehacks" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.facebook.com/treehacks/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="https://twitter.com/hackwithtrees" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
    </div>
  );
}

export default Header;
