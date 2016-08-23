import React from 'react';
import { connect } from 'react-redux';

import { getAllStages } from '../reducers/index';

import './Settings.css';

const Settings = ({ stages, toggleSettingsOpen, toggleDay }) => {
  return (
    <div className="settings">
      Show Stages:
      <ul>
        { stages.map(stage => (
            <li key={ stage.name }>
              <input
                name={ stage.name } type="checkbox"
                defaultChecked={ stage.hidden ? false : true }
                onClick={ () => toggleDay(stage.name) }
              /> { stage.name }
            </li>
        )) }
      </ul>
      <span onClick={ toggleSettingsOpen } className="closeButton">&times;</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stages: getAllStages(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleSettingsOpen: () => dispatch({ type: 'TOGGLE_SETTINGS_OPEN' }),
  toggleDay: (stageName) => dispatch({ type: 'TOGGLE_STAGE_VISIBLE', stageName }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
