import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Day from './components/Day';
import { getCurrentDay } from './reducers/index';



const App = ({ day }) => (
  <div className="App">
    <div className="App-header">
      <h2>Welcome to Clashfinder</h2>
    </div>
    <Day day={ day }/>
  </div>
);

const mapStateToProps = (state) => ({
  day: getCurrentDay(state)
});

export default connect(
  mapStateToProps
)(App);
