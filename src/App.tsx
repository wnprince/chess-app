import React from 'react';
import Scoreboard from './components/Scoreboard'; 
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className=" h-screen pt-1 bg-main">
      <Scoreboard />
      <Board />
    </div>
  );
}

export default App;
