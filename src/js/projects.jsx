import React from 'react';
import {projects} from './content.json';

function Projects() {
  var content = [];
  for (var i = 0; i < projects.length; i++) {
    content.push(Project(projects[i].name, projects[i].link))
  }
  return (
    <div id="projects">
      <h1 className="section-heading">Projects</h1>
      <hr />
      <div className="container">
        {content}
      </div>
    </div>
  );
}

function Project(name, link) {
  return(
    <a href={link} target="_blank">
      <button className="green-button">{name}</button>
    </a>
  );
}

export default Projects;
