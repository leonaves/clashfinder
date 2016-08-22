import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Day from './components/Day';
import { getCurrentDay, getCurrentDayIndex, getDaysByName } from './reducers/index';

const App = ({ day, dayIndex, daysByName, updateDay }) => (
  <div className="App">
    <div className="App-header">
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
    <Day day={ day }/>
  </div>
);

const mapStateToProps = (state) => ({
  day: getCurrentDay(state),
  dayIndex: getCurrentDayIndex(state),
  daysByName: getDaysByName(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateDay: (day) => dispatch({ type: 'CHANGE_CURRENT_DAY', value: day })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
