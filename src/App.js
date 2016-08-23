import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import AppHeader from './components/AppHeader';
import Day from './components/Day';
import Settings from './components/Settings';

import { getCurrentDayIndex, isSettingsOpen } from './reducers/index';

const App = ({ dayIndex, settingsOpen }) => (
  <div>
    <div className="settingsContainer" style={ settingsOpen ? { transform: 'translateY(0)' } : {}}>
      <Settings />
    </div>
    <div className="AppContainer" style={ settingsOpen ? { opacity: 0.7 } : {} }>
      <div className="App">
        <AppHeader />
        <Day dayIndex={ dayIndex }/>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  dayIndex: getCurrentDayIndex(state),
  settingsOpen: isSettingsOpen(state)
});


export default connect(
  mapStateToProps
)(App);
