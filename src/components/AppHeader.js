import React from 'react';
import { connect } from 'react-redux';

import Cog from '../icons/Cog.js';
import { appHeaderHeight } from '../layoutUtils';
import { getCurrentDayIndex, getDaysByName } from '../reducers/index';

import './AppHeader.css';

const AppHeader = ({ dayIndex, daysByName, updateDay, toggleSettingsOpen }) => (
  <div className="App-header" style={{ height: appHeaderHeight + 'px' }}>
    <div className="settingsButton">
      <button onClick={ toggleSettingsOpen }><Cog /></button>
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
  toggleSettingsOpen: () => dispatch({ type: 'TOGGLE_SETTINGS_OPEN' }),
  updateDay: (day) => dispatch({ type: 'CHANGE_CURRENT_DAY', value: day })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
