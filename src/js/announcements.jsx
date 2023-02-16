import React from "react";
import { emojify } from "react-emojione";
import Remarkable from "remarkable";

class Announcements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: [],
    };

    this.md = new Remarkable({
      breaks: true,
      linkify: true,
    });
  }

  componentWillMount() {
    fetch("https://root.treehacks.com/api/announcements")
      .then((r) => r.json())
      .then((announcements) => {
        if (announcements.error) {
          throw new Error(JSON.stringify(announcements.error));
        }

        announcements = announcements.map(({ text, ts }) => {
          return {
            ts,
            content: this.md
              .render(emojify(text, { output: "unicode" }))
              .replace(/\s*&lt;!(?:channel|here)&gt;\s*/g, "") // remove @channel
              .replace(/&lt;.*?\|(.*?)&gt;/g, "#$1"), // reformat slack links
          };
        });
        this.setState({ announcements });
        this.props.setAnnouncementData(announcements);
      })
      .catch((e) => {
        let announcements = [
          {
            content: `Failed to fetch announcements :( ${e}`,
            ts: Date.now() / 1000,
          },
        ];
        this.setState({ announcements });
        this.props.setAnnouncementData(announcements);
      });
  }

  render() {
    const { announcements } = this.state;
    return (
      <div id="announcements" className="section">
        <h1 className="section-heading">Announcements</h1>
        <hr />
        <div className="container">
          {announcements.length ? (
            announcements.map(({ content, ts }) => (
              <div key={ts} className="announcement">
                <div
                  className="message"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <p className="ts">{new Date(ts * 1000).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <div className="loading">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Announcements;
