import React from 'react';
import * as logo from '../svg/logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';

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
        <div id="social-media">
          <li className="header-item"><a href="https://www.instagram.com/hackwithtrees"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li className="header-item"><a href="https://www.facebook.com/treehacks/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li className="header-item"><a href="https://twitter.com/hackwithtrees"><FontAwesomeIcon icon={faTwitter} /></a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
