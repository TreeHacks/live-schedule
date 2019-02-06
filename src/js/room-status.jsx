import React from 'react';
import { Textfit } from 'react-textfit';

class RoomStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Date.now(),
      status: null
    }

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
    this._clockInterval = window.setInterval(() => this.setState({ now: Date.now() }), 1000);
    this._fetchInterval = window.setInterval(() => this.refresh(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._clockInterval);
    clearInterval(this._fetchInterval);
  }

  refresh() {
    if (!this.props.match.params.roomId) { return; }
    fetch(`https://api.treehacks.com/rooms/status?id=${this.props.match.params.roomId}`)
      .then(r => r.json())
      .then(status => this.setState({ status }))
      .catch(e => this.setState({ status: { name: "??!!?!" } }));
  }

  _formatDelta(delta) {
    if (delta < 0) { delta = 0; }
    const pad = (d) => Math.floor(d).toString().padStart(2, "0");
    return `${pad(delta / 60)}:${pad(delta % 60)}`;
  }

  render() {
    const { now, status } = this.state;

    if (!status) {
      return null;
    }

    const expiry = new Date(status.expiry);

    return (
      <div id="room_status">
        <div className="title"><Textfit mode="multi" min={100}>{status.name || 'unknown room'}</Textfit></div>
        <div className="subtitle"><Textfit mode="single">{expiry > now ? `expires in ${this._formatDelta((expiry - now) / 1000)}` : 'currently available!'}</Textfit></div>
      </div>
    );
  }
}

export default RoomStatus;
