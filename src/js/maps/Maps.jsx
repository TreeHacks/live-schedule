import React, { useEffect, useState } from "react";
import floor1 from "./floor1.png";
import floor2 from "./floor2.png";
import floor3 from "./floor3.png";
import basement from "./basement.png";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tag: null,
      searchInput: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div
          style={{ paddingTop: "0px", paddingBottom: "40px" }}
          className="prizes"
        >
          <h1
            className="api-title"
            style={{ marginTop: "0px", paddingTop: "20px" }}
          >
            Maps
          </h1>
          <p>
            Take a look at the floor plans for each floor of the Huang Center
          </p>
          <div id="map">
            <div id="floorContainer">
              <h3>Basement</h3>
              <img src={basement} alt="logo" />
            </div>
            <div id="floorContainer">
              <h3>First Floor</h3>
              <img src={floor1} alt="logo" />
            </div>
            <div id="floorContainer">
              <h3>Second Floor</h3>
              <img src={floor2} alt="logo" />
            </div>
            <div id="floorContainer">
              <h3>Third Floor</h3>
              <img src={floor3} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
