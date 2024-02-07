import React from "react";
import * as whitelogo from "../svg/whitelogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import Timer from './timer.jsx';
import instagramIcon from "../svg/instagram.svg";
import facebookIcon from "../svg/facebook.svg";
import twitterIcon from "../svg/twitter.svg";

function Header() {
  return (
    <nav id="header">
      <ul className="container" style={{ background: "#BBCCBB" }}>
        <li id="header-logo">
          <a href="/">
            <img src={whitelogo} alt="treehacks small logo" />
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
  return (
    <div id="social-media">
      <a href="https://www.instagram.com/stanfordtreehacks" target="_blank">
        {/* <FontAwesomeIcon style={{ color: "#105E54" }} icon={faInstagram} /> */}
        <img src={instagramIcon} />
      </a>
      <a href="https://www.facebook.com/treehacks/" target="_blank">
        {/* <FontAwesomeIcon style={{ color: "#105E54" }} icon={faFacebookF} /> */}
        <img src={facebookIcon} />
      </a>
      <a href="https://twitter.com/hackwithtrees" target="_blank">
        {/* <FontAwesomeIcon style={{ color: "#105E54" }} icon={faTwitter} /> */}
        <img src={twitterIcon} />
      </a>
    </div>
  );
}

export default Header;
