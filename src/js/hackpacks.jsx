import React from 'react';
import {hackpacks} from './content.json';

function Hackpacks() {
  var content = [];
  for (var i = 0; i < hackpacks.length; i++) {
    content.push(HackPack(hackpacks[i].name, hackpacks[i].link))
  }
  return (
    <div id="hackpacks" className="section">
      <h1 className="section-heading">Hackpacks</h1>
      <hr />
      <div className="container">
        {content}
      </div>
    </div>
  );
}

function HackPack(name, link) {
  return(
    <a href={link} target="_blank">
      <button className="main-button inverted-button">{name}</button>
    </a>
  );
}

export default Hackpacks;
