import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header.jsx';
import Countdown from './js/countdown.jsx';
import Resources from './js/resources.jsx';
import Schedule from './js/schedule.jsx';
import Announcements from './js/announcements.jsx';
import Projects from './js/projects.jsx';
import Hackpacks from './js/hackpacks.jsx';
import './favicons/favicons';
import './index.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
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

function CustomRedirect({from, to}) {
  return <Route exact path={from} component={() => { window.location = to; return null;} }/>
}

function App() {
  return (
    <Router>
      <Switch>
        <CustomRedirect from="/faq" to="https://treehacks.quip.com/AAJgA6BS2tvU/The-Ultimate-TreeHacks-Guide-" />
        {/* todo maps */}
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
