import React from 'react';

import Stage from './Stage';

export default ({ day }) -> {
  return (
    <div className="day">
      {
        day.hasOwnProperty("stages") ?
        day.stages.map(stage => <Stage name={ stage.name } sets={ stage.sets } />)
        : <span>No stages for day.</span>
      }
    </div>
  )
}
