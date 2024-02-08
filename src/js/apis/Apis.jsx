import React, { useEffect, useState } from "react";
import Bricklayer from "bricklayer";
import data from "./data.yaml";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import giftData from "./gifts.json";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: null,
      searchInput: "",
      companyData: data.companies,
      constantCompanyData: data.companies,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
    //const dataC = [{ name: "Belgium", continent: "Europe" }];
    if (this.state.searchInput.length == 0) {
      this.setState({ companyData: this.state.constantCompanyData });
    } else if (this.state.searchInput.length > 0) {
      const filtered = this.state.constantCompanyData.filter(
        (country) =>
          country.apis[0].title
            .toLowerCase()
            .includes(this.state.searchInput) ||
          country.apis[0].description
            .toLowerCase()
            .includes(this.state.searchInput)
      );
      this.setState({ companyData: filtered });
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

  render() {
    var giftResult = [];
    for (var i in giftData) {
      giftResult.push([i, giftData[i]]);
    }

    return (
      <div class="apis container" style={{ backgroundColor: "#E3EBDD", paddingTop: "0px" }}>
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
          <input
            type="text"
            placeholder="Search here"
            id="searchInput"
            style={{
              width: "80%",
              borderRadius: "20px",
              fontSize: "20px",
              backgroundColor: "transparent",
              border: "1px solid black",
              padding: "10px 15px",
              fontFamily: "Avenir",
              margin: "20px 0",
            }}
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
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
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
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
            {this.state.companyData.length == 0 && (
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    color: "black",
                    paddingBottom: "30px",
                  }}
                >
                  No results found
                </h1>
              </div>
            )}
          </Masonry>
        </ResponsiveMasonry>
        <div className="row">
          <h1 className="api-title">Gift-In-Kind</h1>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {giftResult.map((company) => {
              return (
                <div className="api-item-container">
                  <div className="card api-item" key={company[1].title}>
                    <h3>{company[1].name}</h3>
                    <p style={{ color: "#0cb08a" }}>
                      Sponsored by: {company[1].title}
                    </p>
                    <p>{company[1].description}</p>
                    <h4 style={{ marginTop: "10px" }}>How to access</h4>
                    <p>{company[1].access}</p>
                    {company[1].links != null &&
                      Object.keys(company[1].links).map((key) => {
                        return (
                          <a target="_blank" href={company[1].links[key]}>
                            <button className="main-button">{key}</button>
                          </a>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    );
  }
}
