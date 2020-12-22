import React from 'react';
import { Router } from '@reach/router'

import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import Modal from './components/Modal';
import { AppContextProvider } from './context/AppContext';
import './App.css';

const App: React.FC = () => {
  console.log(window.location.pathname);
  return (
    <AppContextProvider>
      <Router>
        <StartPage path="/" />
        <GamePage path="/game" />
      </Router>
      <Modal />
    </AppContextProvider>
  )
}

export default App;
