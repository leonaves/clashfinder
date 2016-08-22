import React from 'react';

import './Day.css'
import StageSets from './StageSets';
import StageName from './StageName';
import { totalDayWidth } from '../layoutUtils';

export default ({ day }) => {
  if (day.hasOwnProperty("stages")) {
    return (
      <div className="day">
          <div className="stageNameContainer">
            { day.stages.map(stage => <StageName key={ stage.name } name={ stage.name }/>) }
          </div>
          <div className="stageSetsContainer" style={{ width: totalDayWidth(day) + 'px' }}>
            { day.stages.map(stage => (
              <StageSets
                key={ stage.name } name={ stage.name } sets={ stage.sets }
                startTime={ day.start } endTime={ day.end }
              />
            )) }
          </div>
      </div>
    );
  } else {
    return (<span>No sets for day.</span>);
  }
}
