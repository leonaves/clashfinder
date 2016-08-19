import React from 'react';

import Stage from './Stage';

export default ({ day }) => {
  return (
    <div className="day">
      {
        day.hasOwnProperty("stages") ?
        day.stages.map(stage => <Stage key={ stage.stageName } name={ stage.stageName } sets={ stage.sets } />)
        : <span>No stages for day.</span>
      }
    </div>
  )
}
