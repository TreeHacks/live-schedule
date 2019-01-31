import React from 'react';
import { emojify } from 'react-emojione';
import Remarkable from "remarkable";

class Announcements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: []
    };

    this.md = new Remarkable({
      breaks: true,
      linkify: true,
    });
  }

  componentWillMount() {
    fetch('https://api.treehacks.com/announcements').then(r => r.json()).then(announcements => {
      this.setState({ announcements });
    });
  }

  render() {
    const { announcements } = this.state;
    return (
      <div id="announcements">
        <h1 className="section-heading">Announcements</h1>
        <hr />
        {announcements.length ?
          announcements.map(({ text, ts }) => (
            <div key={ts} className="announcement">
              <div class="message" dangerouslySetInnerHTML={ { __html: this.md.render(emojify(text, { output: 'unicode' })) } } />
              <p class="ts">{new Date(ts * 1000).toLocaleString()}</p>
            </div>
          ))
        :
          <div class="loading">
            <p>Loading...</p>
          </div>
        }
      </div>
    );
  }
}

export default Announcements;
