import React, { useEffect, useState } from "react";
import Bricklayer from "bricklayer";
import data from "./data.yaml";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      tag: null,
      searchInput: "",
      companyData: data.companies,
    };
    this.onTagClick = this.onTagClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
    //const dataC = [{ name: "Belgium", continent: "Europe" }];
    if (this.state.searchInput.length > 0) {
      const filtered = this.state.companyData.filter(
        (country) =>
          country.apis[0].title
            .toLowerCase()
            .includes(this.state.searchInput) ||
          country.apis[0].description
            .toLowerCase()
            .includes(this.state.searchInput)
      );
      this.setState({ companyData: filtered });
      console.log(filtered);
    }
  };

  /*

  const filtered = constantProjectData.filter(
    (project) =>
      project.projectTitle?.includes(search) ||
      project.projectDescription?.includes(search) ||
      project.builders?.includes(search) ||
      project.submitFirstName?.includes(search) ||
      project.submitLastName?.includes(search)
  );*/

  componentDidMount() {
    this.bricklayer = new Bricklayer(this.myRef.current);
  }
  onTagClick(tag) {
    this.bricklayer.destroy();

    if (tag == this.state.tag) {
      this.setState({ tag: null }, () => {
        this.bricklayer = new Bricklayer(this.myRef.current);
      });
    } else {
      this.setState({ tag: tag }, () => {
        this.bricklayer = new Bricklayer(this.myRef.current);
      });
    }
  }

  render() {
    return (
      <div class="apis container">
        <div className="row">
          <h1 className="api-title">APIs & Resources</h1>
        </div>
        <div className="row">
          {/* <button
            className={`api-tag-button ${
              null == this.state.tag ? "active" : ""
            }`}
            onClick={() => this.onTagClick(null)}
          >
            All
          </button> */}
          Here you can find a list of all the API's offered by our sponsoring
          companies, along with any resources and forms we post to receive cloud
          credits.
          {/* <input
            type="text"
            placeholder="Search here"
            style={{
              width: "80%",
              borderRadius: "20px",
              backgroundColor: "transparent",
              border: "1px solid black",
              padding: "10px 15px",
              margin: "20px 0",
            }}
            onChange={this.handleChange}
            value={this.state.searchInput}
          /> */}
          {/*  {(data.tags || []).map((tag) => (
            <button
              className={`api-tag-button ${
                tag == this.state.tag ? "active" : ""
              }`}
              onClick={() => this.onTagClick(tag)}
            >
              {tag}
            </button>
          ))} */}
        </div>
        <div className="bricklayer" ref={this.myRef}>
          {this.state.companyData.map((company) =>
            company.apis.map((api) => {
              if (
                this.state.tag == null ||
                (api.tags && api.tags.includes(this.state.tag))
              ) {
                return (
                  <div className="api-item-container">
                    <div className="card api-item" key={api.title}>
                      <h3>{api.title}</h3>
                      <p>{api.description}</p>
                      {company.slack && (
                        <p>
                          slack: <strong>#{company.slack}</strong>
                        </p>
                      )}
                      {console.log(api)}
                      {api.links != null &&
                        api.links.map((link) => (
                          <a target="_blank" href={link.url}>
                            <button className="main-button">
                              {link.title || link.url}
                            </button>
                          </a>
                        ))}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      </div>
    );
  }
}
