import { hackpacks } from "./content.json";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Leaderboard from "./leaderboard";

function Top10() {
  let [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1N8RqReKd4slyPWcjNQ9Q_NwF8azFzYPMJMQ7SG_zTqM/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
  }, []);

  return (
    <div id="group">
      <Leaderboard />
      <div id="sidebar">
        <div id="leaderboard2" className="section">
          <h1 className="section-heading">Top 10</h1>
          <button
            style={{
              backgroundColor: "#105E54",
              border: "none",
              color: "white",
              padding: "10px",
              fontFamily: "Avenir",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            refresh
          </button>

          <h5 style={{ marginTop: "20px" }}>
            Below are the top 10 hackers on the leaderboard right now, way to
            go! Continue to rack up points by going to events and workshops so
            you can get on this leaderboard too!
          </h5>
          <hr />
          <p>
            <div style={{ marginTop: "20px" }}>
              {data &&
                data.map((row, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <h3>{index + 1}</h3>
                      <div
                        style={{
                          padding: "10px",
                          backgroundColor: "#105E54",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        {row["name"]}
                      </div>
                      <div
                        style={{
                          padding: "10px",
                          backgroundColor: "gray",
                          color: "white",
                          borderRadius: "50%",
                        }}
                      >
                        {row["points"]} pts
                      </div>
                    </div>
                  );
                })}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Top10;
