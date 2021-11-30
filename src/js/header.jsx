import React from 'react';
import * as logo from '../svg/logo.svg';
import * as newLogo from '../svg/newLogo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
// import Timer from './timer.jsx';

function Header() {
  return(
    <nav id="header">
      <ul className="container" style={{background: '#15766A'}}>
        <li id="header-logo">
          <a href="/">
            <img src={newLogo} alt="treehacks small logo"/>
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
      <a style={{background: 'white'}} href="https://www.instagram.com/stanfordtreehacks" target="_blank"><FontAwesomeIcon style={{color: '#15766A'}} icon={faInstagram} /></a>
      <a style={{background: 'white'}} href="https://www.facebook.com/treehacks/" target="_blank"><FontAwesomeIcon style={{color: '#15766A'}} icon={faFacebookF} /></a>
      <a style={{background: 'white'}} href="https://twitter.com/hackwithtrees" target="_blank"><FontAwesomeIcon style={{color: '#15766A'}} icon={faTwitter} /></a>
    </div>
  );
}

export default Header;
