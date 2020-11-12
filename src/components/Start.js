import React from 'react';
import './Start.scss'

class Start extends React.Component {
    render() {
        return (
            <div className="Start-wrapper">
                <h1>Choose one</h1>
                <div className="Start-form-group">
                    <div className="Start-form-items">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Chess_tile_pl.svg"  height="50" width="50" alt=""/>
                    </div>
                    <div className="Start-form-items">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Chess_put45.svg" height="50" width="50" alt=""/>
                    </div>
                    <div className="Start-form-items">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Chess_pdt26.svg" height="50" width="50" alt=""/>
                    </div>

                </div>
                <button className="Start-button">Start Game</button>
            </div>
        )
    }
}

export default Start;