import React from 'react';
import { connect } from 'react-redux';

import './Day.css'
import StageSets from './StageSets';
import StageName from './StageName';
import Timeline from './Timeline';

import { totalDayWidth, timelinePadding } from '../layoutUtils';

import { getDayByIndex, getVisibleStagesForDay } from '../reducers/index';

const Day = ({ day, visibleStages, totalDayWidth }) => {
  if (day.hasOwnProperty("stages")) {
    return (
      <div className="day">
          <div
            className="stageNameContainer"
            style={{
              paddingLeft: timelinePadding,
              width: totalDayWidth,
              minWidth: 'calc(100vw - ' + timelinePadding + 'px)'
            }}
          >
            { visibleStages.map(stage => <StageName key={ stage.name } name={ stage.name }/>) }
          </div>
          <div
            className="stageSetsContainer"
            style={{
              paddingLeft: timelinePadding,
              width: totalDayWidth,
              minWidth: 'calc(100vw - ' + timelinePadding + 'px)'
            }}
          >
            <Timeline day={ day } />
            { visibleStages.map(stage => (
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
};

const mapStateToProps = (state, ownProps) => {
  const day = getDayByIndex(state, ownProps.dayIndex);
  return {
    day,
    visibleStages: getVisibleStagesForDay(state, day),
    totalDayWidth: totalDayWidth(state, day)
  }
};
export default connect(
  mapStateToProps
)(Day)