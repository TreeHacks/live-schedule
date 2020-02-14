import React from "react";

class MobileHud extends React.Component {
  render() {
    const announcements = this.props.announcementData || [],
      announcementContent = announcements.length
        ? announcements[0].content
        : "Loading...";

    return (
      <div id="mobile-hud">
        <div>
          <strong>Latest announcement:</strong>{" "}
          <div
            className="message"
            dangerouslySetInnerHTML={{ __html: announcementContent }}
          />
        </div>
        <a className="main-button" href="https://root.treehacks.com/rooms">
          reserve a room
        </a>
        <a className="main-button" href="https://help.treehacks.com/">
          request mentor help
        </a>
      </div>
    );
  }
}

export default MobileHud;
