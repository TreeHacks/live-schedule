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

      <a
        className="main-button"
        target="_blank"
        href="https://calendar.google.com/calendar/u/0/embed?src=3af74f35a1cc66846660ec161c0b77670bf1fbf68e1001e5a0804503f2e7ac36@group.calendar.google.com&ctz=America/Los_Angeles"
      >
        mentor help
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
