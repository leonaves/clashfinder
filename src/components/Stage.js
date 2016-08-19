import React from 'react';

export default ({ name, sets }) => (
  <div className="stage">
    <div className="stageName">
      { name }
    </div>
    <div className="sets">
      {
        sets.map(set =>
          <div key={ set.actName + set.startTime.toString() } className="set">
            { set.actName }
            { set.startTime.toString() }
            { set.endTime.toString() }
          </div>
        )
      }
    </div>
  </div>
);