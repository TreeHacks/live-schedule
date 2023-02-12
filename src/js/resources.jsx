import React from "react";
import resources from "./content.json";
import slackIcon from "../svg/slack.svg";
import devpostIcon from "../svg/devpost.svg";
import hardwareIcon from "../svg/hardware.svg";
import apisIcon from "../svg/apis.svg";
import mapsIcon from "../svg/maps.svg";
import faqIcon from "../svg/faq.svg";
import trophyIcon from "../svg/trophy.svg";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div id="resources" className="section">
      <a
        href="https://join.slack.com/t/treehacks2023/shared_invite/zt-1o9x80qf4-fgz7xEKi7nINeFDMF6Os5Q"
        target="_blank"
      >
        <div className="resource-container">
          <img src={slackIcon} className="resource-icon" />
          Slack
        </div>
      </a>

      <a href="https://treehacks-2023.devpost.com/" target="_blank">
        <div className="resource-container">
          <img src={devpostIcon} className="resource-icon" />
          Devpost
        </div>
      </a>

      <a href="https://support.treehacks.com" target="_blank">
        <div className="resource-container">
          <img src={faqIcon} className="resource-icon" />
          FAQ
        </div>
      </a>
      <a href="/prizes" target="">
        <div className="resource-container">
          <img src={trophyIcon} className="resource-icon" />
          Prizes
        </div>
      </a>

      <a href="/apisresources" target="">
        <div className="resource-container">
          <img src={apisIcon} className="resource-icon" />
          APIs, Resources, Gifts-in-Kind
        </div>
      </a>
    </div>
  );
}

export default Resources;
