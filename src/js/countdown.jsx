import React from "react";
import { START_DATE, default as Timer } from "./timer.jsx";

function Countdown() {
  var units = ["days", "hours", "minutes", "seconds"];
  var timeline = [];
  for (var i = 0; i < 4; i++) {
    timeline.push(<TimerUnit unit={units[i]} key={i} />);
  }
  return (
    <div id="countdown" className="section">
      <Timer />
      <hr />
      <div className="timeUnits">{timeline}</div>
      <h1 id="countdown-heading">
        until hacking {new Date() < START_DATE ? "starts" : "ends"}!
      </h1>
      {/* <a className="main-button" href="https://root.treehacks.com/rooms">
        reserve a room
      </a> */}
      <a className="main-button" href="https://help.treehacks.com/">
        request mentor help
      </a>
    </div>
  );
}

class TimerUnit extends React.Component {
  render() {
    return (
      <div className="timeUnit">
        <svg>
          <circle />
        </svg>
        <br />
        {this.props.unit}
      </div>
    );
  }
}

export default Countdown;
