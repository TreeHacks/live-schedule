import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header.jsx';
import Countdown from './js/countdown.jsx';
import Resources from './js/resources.jsx';
import Schedule from './js/schedule.jsx';
import Announcements from './js/announcements.jsx';
import Projects from './js/projects.jsx';
import Hackpacks from './js/hackpacks.jsx';
import Apis from './js/apis/Apis.jsx';
import './favicons/favicons';
import './index.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <Countdown />
      <Resources />
      <Schedule />
      <div id="group">
        <Announcements />
        <div id="sidebar">
          <Projects />
          <Hackpacks />
        </div>
      </div>
    </div>
  );
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
          {/* todo maps
        <CustomRedirect from="/maps" to="..." />
        */}
          <Route exact path="/" component={Main} />
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
