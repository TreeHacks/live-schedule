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

function App() {
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
