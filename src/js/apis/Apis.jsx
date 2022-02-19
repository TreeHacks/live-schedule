import React from "react";
import Bricklayer from "bricklayer";
import data from "./data.yaml";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      tag: null,
    };
    this.onTagClick = this.onTagClick.bind(this);
  }
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
          <button
            className={`api-tag-button ${
              null == this.state.tag ? "active" : ""
            }`}
            onClick={() => this.onTagClick(null)}
          >
            All
          </button>
          {(data.tags || []).map((tag) => (
            <button
              className={`api-tag-button ${
                tag == this.state.tag ? "active" : ""
              }`}
              onClick={() => this.onTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="bricklayer" ref={this.myRef}>
          {(data.companies || []).map((company) =>
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
                      {api.links.map((link) => (
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
