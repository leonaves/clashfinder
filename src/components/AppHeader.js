import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'

import Cog from '../icons/Cog.js';
import { appHeaderHeight } from '../layoutUtils';
import { getCurrentDayIndex, getDaysByName } from '../reducers/index';

import './AppHeader.css';

const AppHeader = ({ dayIndex, daysByName, updateDay, toggleSettingsOpen }) => {
  const dayOptions = daysByName.map((name, index) => ({ value: index + 1, label: name }));
  return (
    <div className="App-header" style={{height: appHeaderHeight + 'px'}}>
      <div className="settingsButton">
        <button onClick={ toggleSettingsOpen }><Cog /></button>
      </div>
      <div className="dayDropDown">
        <Dropdown
          options={ dayOptions } onChange={ (day) => { updateDay(day.value - 1) } }
          value={ dayOptions[dayIndex] }
        />
      </div>
    </div>
  );
};

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
