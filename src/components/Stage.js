import React from 'react';
import leftPad from 'left-pad';
import './Stage.css';

export default ({ name, sets }) => (
  <div className="stage">
    <div className="stageName">
      { name }
    </div>
    <div className="sets">
      {
        sets.map(set =>
          <div key={ set.actName + set.startTime.toString() } className="set">
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