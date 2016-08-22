import React from 'react';

import './Day.css'
import Stage from './Stage';

export default ({ day }) => {
  return (
    <div className="day">
      {
        day.hasOwnProperty("stages") ?
        day.stages.map(stage => <Stage key={ stage.name } name={ stage.name } sets={ stage.sets } startTime={ day.start } />)
        : <span>No sets for day.</span>
      }
    </div>
  )
}
