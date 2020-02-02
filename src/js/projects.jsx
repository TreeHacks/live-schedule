import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./content.json";

function Projects() {
  var content = [];
  for (var i = 0; i < projects.length; i++) {
    content.push(Project(projects[i].name, projects[i].link));
  }
  return (
    <div id="projects" className="section">
      <h1 className="section-heading">Challenges</h1>
      <hr />
      <div className="container">{content}</div>
    </div>
  );
}

function Project(name, link) {
  return (
    <Link to={link} target="_blank">
      <button className="main-button inverted-button">{name}</button>
    </Link>
  );
}

export default Projects;
