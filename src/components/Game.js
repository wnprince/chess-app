import React from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';
import './Game.scss';

class Game extends React.Component {
    render() {
        
        return (
            <div className="Game-wrapper">
                <Board />
                <Scoreboard />
            </div>
        )
    }
}

export default Game;