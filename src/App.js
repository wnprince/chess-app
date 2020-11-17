import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive'

import Start from './components/Start';
import Game from './components/Game';
import { GameContextProvider } from './contexts/GameContext';
import Modal from './components/Modal';
import './App.scss';

class App extends React.Component {
  render() {
    const possibleQuestions = [
      'h8', 'h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1',
      'g8', 'g7', 'g6', 'g5', 'g4', 'g3', 'g2', 'g1',
      'f8', 'f7', 'f6', 'f5', 'f4', 'f3', 'f2', 'f1',
      'e8', 'e7', 'e6', 'e5', 'e4', 'e3', 'e2', 'e1',
      'd8', 'd7', 'd6', 'd5', 'd4', 'd3', 'd2', 'd1',
      'c8', 'c7', 'c6', 'c5', 'c4', 'c3', 'c2', 'c1',
      'b8', 'b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1',
      'a8', 'a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1'
    ]
    return (
      <div className="App">
        <MediaQuery minWidth={1800}>
          <GameContextProvider possibleQuestions={possibleQuestions} >
            <Switch>
              <Route exact path='/play' component={ Game }/>
              <Route exact path='/' component={ Start }/>
            </Switch>
            <Modal />
          </GameContextProvider>
        </MediaQuery>
        <MediaQuery maxWidth={1800}>
        <div className="App-small">
          <h1>{`This app can only be accessed on devices with screen size >= 1800`}</h1>
        </div>
        </MediaQuery>
      </div>
    );
  }
}

export default App;