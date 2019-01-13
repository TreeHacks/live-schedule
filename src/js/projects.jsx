import React from 'react';

function Projects() {
  var projects = ["Health", "Awareness", "Safety", "OSI"];
  var content = [];
  for (var i = 0; i < projects.length; i++) {
    content.push(
      <div className="project" key={i}>
        <button className="green-button">{projects[i]}</button>
      </div>
    );
  }
  return (
    <div id="projects">
      <h1 className="section-heading">Projects</h1>
      <hr />
      {content}
    </div>
  );
}

export default Projects;
