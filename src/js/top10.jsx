import { hackpacks } from "./content.json";
import Tabletop from "tabletop";
import React, { useEffect, useState } from "react";

function Top10() {
  return (
    <div id="leaderboard" className="section">
      <h1 className="section-heading">Top 10</h1>
      <hr />
      <h5>
        Below are the top 10 hackers on the leaderboard right now, way to go!
        Continue to rack up points by going to events and workshops so you can
        get on this leaderboard too!
      </h5>
      <p>
        <div style={{ marginTop: "10px" }}>
          <iframe
            style={{ width: "100%", height: "400px" }}
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTTYv8Y8r56wdOmZhbSVtyShY-ISDKfpNLIn2uIAOMPGsMxYZ2CAchAr0X1-AWVO_DzrtfVQTiRGBAj/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          ></iframe>
        </div>
      </p>
    </div>
  );
}

export default Top10;
