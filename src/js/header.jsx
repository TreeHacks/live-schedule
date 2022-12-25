import React from "react";
import * as whiteLeavesLogo from "../svg/whiteLeavesLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import Timer from './timer.jsx';

function Header() {
  return (
    <nav id="header">
      <ul className="container" style={{ background: "#0CB08A" }}>
        <li id="header-logo">
          <a href="/">
            <img src={whiteLeavesLogo} alt="treehacks small logo" />
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
      <a
        style={{ background: "white" }}
        href="https://www.instagram.com/stanfordtreehacks"
        target="_blank"
      >
        <FontAwesomeIcon style={{ color: "#105E54" }} icon={faInstagram} />
      </a>
      <a
        style={{ background: "white" }}
        href="https://www.facebook.com/treehacks/"
        target="_blank"
      >
        <FontAwesomeIcon style={{ color: "#105E54" }} icon={faFacebookF} />
      </a>
      <a
        style={{ background: "white" }}
        href="https://twitter.com/hackwithtrees"
        target="_blank"
      >
        <FontAwesomeIcon style={{ color: "#105E54" }} icon={faTwitter} />
      </a>
    </div>
  );
}

export default Header;
