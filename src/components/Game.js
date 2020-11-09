import React from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';
import { GameContextProvider } from '../contexts/GameContext';
import './Game.scss';

class Game extends React.Component {
    render() {
        return (
            <div className="Game-wrapper">
                <GameContextProvider>
                    <Board />
                    <Scoreboard />
                </GameContextProvider>
            </div>
        )
    }
}

export default Game;