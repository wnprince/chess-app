import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@reach/router';

import { AppContext } from '../context/AppContext';

const modal = document.getElementById('modal')!;

class Modal extends React.Component {
    static contextType = AppContext;

    render(){
        console.log(this.context);
        const ui = (this.context.gameOver) ? (
            <div className="fixed top-1/4 left-1/4 lg:top-1/3 lg:left-1/3 -translate-x-1/2 -translate-y-1/2 bg-white h-1/4 w-1/2 lg:w-1/4 flex flex-col items-center justify-between">
                <h1 className="font-bold text-4xl mt-2">Game Over</h1>
                <h1 className="text-xl">Your Score: {this.context.score}</h1>
                <Link to='/'>
                    <button className="btn-start mb-5" onClick={this.context.reset}>Play Again</button>
                </Link>
            </div>
        ) : null;
        return createPortal(
            ui,
            modal
        )
    }
}

export default Modal;