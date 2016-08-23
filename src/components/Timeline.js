import React from 'react';
import { connect } from 'react-redux';

import './Timeline.css';

import { pixelsToMinutes, totalDayWidth } from '../layoutUtils';

const Timeline = ({ day, width }) => {
  const hours = Math.abs(day.start.diff(day.end, 'hours'));

  let currentHour = day.start.clone();

  let hourMarkers = [];
  for (let i = 0; i < hours; i++) {
    hourMarkers.push(
      <div key={ currentHour.format('HH:mm') }
           className="hourMarker"
           style={{ top: (pixelsToMinutes * 60 * i) + 'px' }}
      >
        { currentHour.format('HH:mm') }
      </div>
    );
    currentHour.add(1, 'hours');
  }

  let top = (0 + 'px');

  return (
    <div className="timeline" style={{ top, width, minWidth: '100vw' }}>
      { hourMarkers }
    </div>
  )
};

const mapStateToProps = (state, { day }) => ({
  width: totalDayWidth(state, day)
});

export default connect(
  mapStateToProps
)(Timeline);
