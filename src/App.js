import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import AppHeader from './components/AppHeader';
import Day from './components/Day';
import Settings from './components/Settings';

import { getCurrentDay, isSettingsOpen } from './reducers/index';

const App = ({ day, settingsOpen }) => (
  <div>
    <div className="settingsContainer" style={ settingsOpen ? { transform: 'translateY(0)' } : {}}>
      <Settings />
    </div>
    <div className="AppContainer" style={ settingsOpen ? { opacity: 0.7 } : {}}>
      <div className="App">
        <AppHeader />
        <Day day={ day }/>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  day: getCurrentDay(state),
  settingsOpen: isSettingsOpen(state)
});


export default connect(
  mapStateToProps
)(App);
