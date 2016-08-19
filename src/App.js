import React from 'react';

import './App.css';

import stages from './fixtures/reading';

import Day from './components/Day';
import getDayFromStages from './reducers/getDayFromStages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1
    };
  }

  render() {
    const day = getDayFromStages(this.state.day)(stages);

    console.log(day);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Clashfinder</h2>
        </div>
        {/*<Day day={ day }/>*/}
      </div>
    );
  }
}

export default App;
