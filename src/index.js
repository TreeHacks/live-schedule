import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header.jsx';
import MobileHud from './js/mobile-hud.jsx';
import Countdown from './js/countdown.jsx';
import Resources from './js/resources.jsx';
import Schedule from './js/schedule.jsx';
import Announcements from './js/announcements.jsx';
import Projects from './js/projects.jsx';
import Hackpacks from './js/hackpacks.jsx';
import RoomStatus from './js/room-status.jsx';
import Apis from './js/apis/Apis.jsx';
import './favicons/favicons';
import './index.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcementData: null
    };

    this.setAnnouncementData = this.setAnnouncementData.bind(this);
  }

  setAnnouncementData(announcementData) {
    this.setState({ announcementData });
  }

  render() {
    return (
      <div>
        <MobileHud announcementData={this.state.announcementData} /> 
        <Countdown />
        <Resources />
        <Schedule />
        <div id="group">
          <Announcements setAnnouncementData={this.setAnnouncementData} />
          <div id="sidebar">
            <Projects />
            <Hackpacks />
          </div>
        </div>
      </div>
    );
  }
}

function CustomRedirect({ from, to }) {
  return <Route exact path={from} component={() => { window.location = to; return null; }} />
}

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <CustomRedirect from="/faq" to="https://treehacks.quip.com/AAJgA6BS2tvU/The-Ultimate-TreeHacks-Guide-" />
          <CustomRedirect from="/maps" to="https://treehacks.quip.com/tOUKAghhGiby/Maps-" />
          <CustomRedirect from="/expo" to="https://treehacks.github.io/expo" />
          <Route exact path="/" component={Main} />
          <Route exact path="/_room/:roomId" component={RoomStatus} />
          <Route exact path="/apis" component={Apis} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
