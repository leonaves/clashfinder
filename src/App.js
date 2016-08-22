import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Day from './components/Day';
import { getCurrentDay, getDaysByName } from './reducers/index';

const App = ({ day, daysByName, updateDay }) => (
  <div className="App">
    <div className="App-header">
      {
        daysByName.map((dayName, index) => (
          <button key={ index } onClick={ () => updateDay(index) }>{ dayName }</button>
        ))
      }
    </div>
    <Day day={ day }/>
  </div>
);

const mapStateToProps = (state) => ({
  day: getCurrentDay(state),
  daysByName: getDaysByName(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateDay: (day) => dispatch({ type: 'CHANGE_CURRENT_DAY', value: day })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
