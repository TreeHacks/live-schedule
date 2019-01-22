import React from 'react';
import slackIcon from '../svg/slack.svg';
import devpostIcon from '../svg/devpost.svg';
import hardwareIcon from '../svg/hardware.svg';
import apisIcon from '../svg/apis.svg';
import mapsIcon from '../svg/maps.svg';
import faqIcon from '../svg/faq.svg';

function Resources() {
  return (
    <div id="resources">
      <div className="resource"><a href="https://join.slack.com/t/treehacks-2019/shared_invite/enQtNTE5ODY0MDI2NjQ3LWI2YjhlYTU3OTE1ODcyMTdmZWYzYWVjY2NjNzQ2YTBiZDY5YWYwYzhkMDhlZTBmNmNmMzMzZWYxM2QwMTMxMmI" target="_blank"><img src={slackIcon} className="resource-icon"/>Slack</a></div>
      <div className="resource"><a href="https://treehacks-2019.devpost.com" target="_blank"><img src={devpostIcon} className="resource-icon"/>Devpost</a></div>
      <div className="resource"><a href="https://hardware.mlh.io" target="_blank"><img src={hardwareIcon} className="resource-icon"/>Hardware</a></div>
      <div className="resource"><a href="/apis"><img src={apisIcon} className="resource-icon"/>APIs</a></div>
      <div className="resource"><a href="/maps"><img src={mapsIcon} className="resource-icon"/>Maps</a></div>
      <div className="resource"><a href="/faq"><img src={faqIcon} className="resource-icon"/>FAQ</a></div>
    </div>
  );
}

export default Resources;
