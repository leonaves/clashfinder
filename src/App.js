import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import AppHeader from './components/AppHeader';
import Day from './components/Day';

import { getCurrentDay } from './reducers/index';

const App = ({ day }) => (
  <div className="App">
    <AppHeader />
    <Day day={ day }/>
  </div>
);

const mapStateToProps = (state) => ({
  day: getCurrentDay(state)
});


export default connect(
  mapStateToProps
)(App);
