import React from 'react';

import Set from './Set';
import './StageSets.css';

import { pixelsFromDiff } from '../layoutUtils';

export default ({ sets, startTime, endTime }) => (
  <div className="sets" style={{ height: pixelsFromDiff(startTime, endTime) }}>
    {
      sets.map(set =>
        <Set key={ set.actName + set.startTime.toString() } set={ set } startTime={ startTime } endTime={ endTime }  />
      )
    }
  </div>
);