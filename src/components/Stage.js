import React from 'react';
import './Stage.css';

const minutesToPixels = 2;

const pixelsFromDiff = (a, b) => {
  const diffMinutes = Math.abs(a.diff(b, 'minutes'));
  return diffMinutes * minutesToPixels;
};

export default ({ name, sets, startTime, endTime }) => (
  <div className="stage">
    <div className="stageName">{ name }</div>
    <div className="sets" style={{ height: pixelsFromDiff(startTime, endTime) }}>
      {
        sets.map(set =>
          <div
            key={ set.actName + set.startTime.toString() }
            className="set"
            style={{
              top: pixelsFromDiff(set.startTime, startTime) + 'px',
              height: pixelsFromDiff(set.startTime, set.endTime)
            }}
          >
            <div className="actName">
              { set.actName }
            </div>
            <div className="actTimes">
              {
                set.startTime.format('HH:mm') + ' – ' + set.endTime.format('HH:mm')
              }
            </div>
          </div>
        )
      }
    </div>
  </div>
);