import React from 'react';
import Game from './components/Game';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;