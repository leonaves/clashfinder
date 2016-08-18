import React from 'react';

export default ({ name, sets }) => (
  <div className="stage">
    <div className="stageName">
      { name }
    </div>
    <div className="sets">
      {
        sets.map(set =>
          <div className="set">
            { set.actName }
            { set.startTime }
            { set.endTime }
          </div>
        )
      }
    </div>
  </div>
);