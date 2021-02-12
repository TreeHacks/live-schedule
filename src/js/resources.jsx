import React from "react";
import resources from "./content.json";
import slackIcon from "../svg/slack.svg";
import devpostIcon from "../svg/devpost.svg";
import hardwareIcon from "../svg/hardware.svg";
import apisIcon from "../svg/apis.svg";
import mapsIcon from "../svg/maps.svg";
import faqIcon from "../svg/faq.svg";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div id="resources" className="section">
      <a href="https://join.slack.com/t/treehacks2021/shared_invite/zt-lgcz1v50-XOWwzePiP194j1OlunUzPA" target="_blank">
        <div className="resource-1">
          <img src={slackIcon} className="resource-icon" />
          Slack
        </div>
      </a>
      <a href="https://treehacks-2021.devpost.com" target="_blank">
        <div className="resource-2">
          <img src={devpostIcon} className="resource-icon" />
          Devpost
        </div>
      </a>
      <a href="https://support.treehacks.com" target="_blank">
        <div className="resource-6">
          <img src={faqIcon} className="resource-icon" />
          FAQ
        </div>
      </a>
    </div>
  );
}

export default Resources;
