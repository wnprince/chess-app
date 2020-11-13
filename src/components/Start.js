import React from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../contexts/GameContext';
import './Start.scss'

class Start extends React.Component {
    static contextType = GameContext;
    constructor(props){
        super(props);

        this.state = {
            mode: 1
        }

        this.handleClick = this.handleClick.bind(this);
        this.toss = this.toss.bind(this);
    }

    handleClick(e) {
        let modeMap = {
            'white': 0,
            'equal': 1,
            'black': 2
        }
        this.setState({
            mode: modeMap[e.currentTarget.id]
        });

        if(e.currentTarget.id === 'equal'){
            console.log('yes')
            this.context.updateIsWhite(this.toss());
        } else {
            this.context.updateIsWhite(e.currentTarget.id === 'white');
        }
    }

    toss() {
        return Math.random() >= 0.5;
    }
    
    render() {
        return (
            <div className="Start-wrapper">
                <h1>Choose one</h1>
                <div className="Start-form-group">
                    <div id="white" className={`Start-form-items ${(this.state.mode === 0) ? 'Start-selected' : ''}`} onClick={this.handleClick}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Chess_tile_pl.svg"  height="50" width="50" alt=""/>
                    </div>
                    <div id="equal" className={`Start-form-items ${(this.state.mode === 1) ? 'Start-selected' : ''}`} onClick={this.handleClick}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Chess_put45.svg" height="50" width="50" alt=""/>
                    </div>
                    <div id="black" className={`Start-form-items ${(this.state.mode === 2) ? 'Start-selected' : ''}`} onClick={this.handleClick}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Chess_pdt26.svg" height="50" width="50" alt=""/>
                    </div>

                </div>
                <Link to='/play'>
                    <button className="Start-button">Start Game</button>
                </Link>
            </div>
        )
    }
}

export default Start;