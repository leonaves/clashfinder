import React from 'react';
import { connect } from 'react-redux';

import { appHeaderHeight } from '../layoutUtils';
import { getCurrentDayIndex, getDaysByName } from '../reducers/index';

import './AppHeader.css';

const AppHeader = ({ dayIndex, daysByName, updateDay }) => (
  <div className="App-header" style={{ height: appHeaderHeight + 'px' }}>
    <div className="settingsButton">
      <button onClick={ () => {} }>Settings</button>
    </div>
    <div className="dayButtons">
      {
        daysByName.map((dayName, index) => (
          <button
            className={ index === dayIndex ? 'current' : '' }
            key={ index } onClick={ () => updateDay(index) }
          >
            { dayName }
          </button>
        ))
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  dayIndex: getCurrentDayIndex(state),
  daysByName: getDaysByName(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateDay: (day) => dispatch({ type: 'CHANGE_CURRENT_DAY', value: day })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
