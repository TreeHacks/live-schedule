import React from "react";
import { hackpacks, preHackathonWorkshops } from "./content.json";

function Hackpacks() {
  var content = [];
  for (var i = 0; i < hackpacks.length; i++) {
    content.push(HackPack(hackpacks[i].name, hackpacks[i].link));
  }

  var content2 = [];
  for (var i = 0; i < preHackathonWorkshops.length; i++) {
    content2.push(
      HackPack(preHackathonWorkshops[i].name, preHackathonWorkshops[i].link)
    );
  }
  return (
    <div id="hackpacks" className="section">
      <h1 className="section-heading">Hackpacks</h1>
      <hr />
      <div className="container">{content}</div>
      <br />
    </div>
  );
}

function HackPack(name, link) {
  return (
    <a href={link} target="_blank">
      <button className="main-button inverted-button">{name}</button>
    </a>
  );
}

export default Hackpacks;
