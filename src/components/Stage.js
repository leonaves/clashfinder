import React from 'react';
import leftPad from 'left-pad';
import './Stage.css';

const dayStartTime = new Date('2016-08-26 10:30 UTC');
const minutesToPixels = 2;

const positionFromTime = startTime => {
  const timeDiff = Math.abs(startTime.getTime() - dayStartTime.getTime());
  const diffMinutes = Math.ceil(timeDiff / (1000 * 60));
  return diffMinutes * minutesToPixels;
};

const heightFromDuration = (startTime, endTime) => {
  const timeDiff = Math.abs(endTime.getTime() - startTime.getTime());
  const diffMinutes = Math.ceil(timeDiff / (1000 * 60));
  return diffMinutes * minutesToPixels;
};

export default ({ name, sets }) => (
  <div className="stage">
    <div className="stageName">{ name }</div>
    <div className="sets">
      {
        sets.map(set =>
          <div
            key={ set.actName + set.startTime.toString() }
            className="set"
            style={{
              top: positionFromTime(set.startTime) + 'px',
              height: heightFromDuration(set.startTime, set.endTime)
            }}
          >
            <div className="actName">
              { set.actName }
            </div>
            <div className="actTimes">
              {
                set.startTime.getUTCHours() + ':' + leftPad(set.startTime.getUTCMinutes(), 2, 0)
                + ' – ' +
                set.endTime.getUTCHours() + ':' + leftPad(set.endTime.getUTCMinutes(), 2, 0)
              }
            </div>
          </div>
        )
      }
    </div>
  </div>
);