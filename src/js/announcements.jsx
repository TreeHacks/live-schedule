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
      announcements = announcements.map(({ text, ts }) => {
        return { content: this.md.render(emojify(text, { output: 'unicode' })), ts };
      });
      this.setState({ announcements });
      this.props.setAnnouncementData(announcements);
    });
  }

  render() {
    const { announcements } = this.state;
    return (
      <div id="announcements">
        <h1 className="section-heading">Announcements</h1>
        <hr />
        <div className="container">
          {announcements.length ?
            announcements.map(({ content, ts }) => (
              <div key={ts} className="announcement">
                <div className="message" dangerouslySetInnerHTML={{ __html: content }} />
                <p className="ts">{new Date(ts * 1000).toLocaleString()}</p>
              </div>
            ))
          :
            <div className="loading">
              <p>Loading...</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Announcements;
