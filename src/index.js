import React from "react";
import ReactDOM from "react-dom";
import Header from "./js/header.jsx";
import Countdown from "./js/countdown.jsx";
import Resources from "./js/resources.jsx";
import Schedule from "./js/schedule.jsx";
import Announcements from "./js/announcements.jsx";
import Projects from "./js/projects.jsx";
import Hackpacks from "./js/hackpacks.jsx";
import RoomStatus from "./js/room-status.jsx";
import Apis from "./js/apis/Apis.jsx";
import Challenge from "./js/challenge.jsx";
import Prehackathon from "./js/prehackathon.jsx";

import "./favicons/favicons";
import "./index.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Prizes from "./js/prizes/Prizes.jsx";
import Leaderboard from "./js/leaderboard.jsx";
import Maps from "./js/maps/Maps.jsx";
import Top10 from "./js/top10.jsx";
import ScavLocation from "./js/scavLocation.jsx";

const reload = () => window.location.reload();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcementData: null,
    };

    this.setAnnouncementData = this.setAnnouncementData.bind(this);
  }

  setAnnouncementData(announcementData) {
    this.setState({ announcementData });
  }

  render() {
    return (
      <div>
        <Countdown />
        <Resources />
        <p>Note: all times below are in PST (California time)</p>
        <Schedule />
        <div id="group">
          <Prehackathon />
          <div id="sidebar">
            {/* <Projects /> */}
            <Hackpacks />
          </div>
        </div>
        {/* <div id="group">
          <Leaderboard />
          <div id="sidebar">
            <Top10 />
          </div>
        </div> */}
      </div>
    );
  }
}

function CustomRedirect({ from, to }) {
  return (
    <Route
      exact
      path={from}
      component={() => {
        window.location = to;
        return null;
      }}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <CustomRedirect
            from="/faq"
            to="https://treehacks.quip.com/FHPoABlrGBLN"
          />
          {/* <CustomRedirect
            from="/maps"
            to="https://treehacks.quip.com/tOUKAghhGiby/Maps-"
          /> */}
          <CustomRedirect from="/expo" to="https://treehacks.github.io/expo" />
          <Route exact path="/" component={Main} />
          {/*  <Route exact path="/_room/:roomId" component={RoomStatus} /> */}
          <Route exact path="/scavhunt/:locationID" component={ScavLocation} />
          <Route exact path="/apisresources" component={Apis} />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/leaderboard" component={Top10} />
          <Route exact path="/prizes" component={Prizes} />
          <Route exact path="/challenges/:challengeId" component={Challenge} />
          <Route path="/apple-app-site-association" onEnter={reload} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
