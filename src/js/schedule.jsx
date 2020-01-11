import React from 'react';
import { VueWrapper } from 'vuera'
import EventSchedule from './event-schedule'

function Schedule() {
  return (
    <div id="schedule" class="section">
      <div className="schedule-embed-wrapper">
        <VueWrapper
          component={EventSchedule}
        />
      </div>
    </div>
  );
}

export default Schedule;
