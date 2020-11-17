import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import { GameContext } from '../contexts/GameContext';
import './Modal.scss';

class Modal extends React.Component {
    static contextType = GameContext;

    render(){
        console.log(!this.context.isGamOver);
        const ui = (this.context.isGameOver) ? (
            <div className="Modal-wrapper">
                <h1>Game Over</h1>
                <br />
                <br />
                <h1>Your Score: {this.context.score}</h1>
                <br />
                <br />
                <br />
                <Link to='/'>
                    <button className="Modal-button" onClick={this.context.reset}>Play Again</button>
                </Link>
            </div>
        ) : null;
        return createPortal(
            ui,
            document.getElementById('modal')
        )
    }
}

export default Modal;