import React from 'react';

function Hackpacks() {
  var hackpacks = ["ARKit", "Bot", "Chatbot", "Chrome Extension", "General", "Healthkit", "Introduction", "iOS", "Web"];
  var content = [];
  for (var i = 0; i < hackpacks.length; i++) {
    content.push(<button className="green-button" key={i}>{hackpacks[i]}</button>);
  }
  return (
    <div id="hackpacks">
      <h1 className="section-heading">Hackpacks</h1>
      <hr />
      {content}
    </div>
  );
}

export default Hackpacks;
