import React from 'react';
import {tabs} from './content.json';

function Footer() {
  var content = [];
  for (var i = 0; i < tabs.length; i++) {
    content.push(Tab(tabs[i].name, tabs[i].link, tabs[i].imageURL))
  }
  return (
    <nav id="footer">
      {content}
    </nav>
  );
}

function Tab(name, link, imageURL) {
  return (
    <a href={link} target="_blank">
      <div className="footer-tab">
        <img src={imageURL}  alt={name}/>
        <p>{name}</p>
      </div>
    </a>
  );
}

export default Footer;
