import React from "react";

export const START_DATE = new Date("2021-02-13T03:00:00.000Z");
export const END_DATE = new Date("2021-02-14T19:00:00.000Z");

function calculateTimeUntil() {
  let date = new Date() < START_DATE ? START_DATE : END_DATE;
  let now = new Date();
  let offset = (date.getTimezoneOffset() - now.getTimezoneOffset()) * 60;
  let timeUntil = (date.getTime() - now.getTime()) / 1000 - offset;
  return timeUntil > 0 ? timeUntil : 0;
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    let timeUntil = calculateTimeUntil();
    this.state = {
      days: Math.floor(timeUntil / 60 / 60 / 24),
      hours: Math.floor((timeUntil / 60 / 60) % 24),
      minutes: Math.floor((timeUntil / 60) % 60),
      seconds: Math.floor(timeUntil % 60)
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let timeUntil = calculateTimeUntil();
    this.setState({
      days: Math.floor(timeUntil / 60 / 60 / 24),
      hours: Math.floor((timeUntil / 60 / 60) % 24),
      minutes: Math.floor((timeUntil / 60) % 60),
      seconds: Math.floor(timeUntil % 60)
    });
  }

  render() {
    return (
      <div id="timer">
        <TimerComponent value={this.state.days} />
        <span>:</span>
        <TimerComponent value={this.state.hours} />
        <span>:</span>
        <TimerComponent value={this.state.minutes} />
        <span>:</span>
        <TimerComponent value={this.state.seconds} />
      </div>
    );
  }
}

class TimerComponent extends React.Component {
  render() {
    var valueString = this.props.value.toString();
    if (this.props.value < 10) {
      valueString = "0" + valueString;
    }
    return <h1 className="timerComponent">{valueString}</h1>;
  }
}

export default Timer;
