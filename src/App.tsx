import React from 'react';
import { Router } from '@reach/router'

import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import { AppContextProvider } from './context/AppContext';
import './App.css';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Router>
        <StartPage path="/" />
        <GamePage path="/game" />
      </Router>
    </AppContextProvider>
  )
}

export default App;
