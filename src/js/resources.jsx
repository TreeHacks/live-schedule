import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSlackHash} from '@fortawesome/free-brands-svg-icons';
import {faCogs, faMap, faQuestion} from '@fortawesome/free-solid-svg-icons';

function Resources() {
  return (
    <div id="resources">
      <div className="resource"><FontAwesomeIcon className="resource-icon" icon={faSlackHash} />Slack</div>
      <div className="resource">Devpost</div>
      <div className="resource">Hardware</div>
      <div className="resource"><FontAwesomeIcon className="resource-icon" icon={faCogs} />APIs</div>
      <div className="resource"><FontAwesomeIcon className="resource-icon" icon={faMap} />Maps</div>
      <div className="resource"><FontAwesomeIcon className="resource-icon" icon={faQuestion} />FAQs</div>
    </div>
  );
}

export default Resources;
