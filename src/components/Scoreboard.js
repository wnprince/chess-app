import React from 'react';
import { GameContext } from '../contexts/GameContext';
import './Scoreboard.scss';

class Scoreboard extends React.Component{
    static contextType = GameContext;
    constructor(props){
        super(props);
        this.state = {
            minutes: 3,
            seconds: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.interval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let {minutes, seconds} = this.state;
        if(minutes.toString().length === 1){
            minutes =  `0${minutes}`;
        } 
        
        if(seconds.toString().length === 1){
            seconds =  `0${seconds}`;
        }
        
        return (
            <section className="Scoreboard-wrapper">
                <div className="Scoreboard-heading">Your Score: { this.context.score }</div>
                <div className="Scoreboard-timer">Time Left: { `${minutes}:${seconds}` }</div>
                <div>{}</div>
            </section>
        )
    }
}

export default Scoreboard;