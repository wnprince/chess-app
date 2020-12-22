import React from 'react';

import { AppContext } from '../context/AppContext';

class Timer extends React.Component<{}, { minutes: number, seconds: number }> {
    static contextType = AppContext;
    interval: NodeJS.Timeout;
    constructor(props: object) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 5,
        };
        this.interval = setInterval(() => console.log('dummy'), 0);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.interval);
                    this.context.toggleGameOver();
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000);
    }

    render() {
        let minutes: string = '', seconds: string = '';
        if(this.state.minutes.toString().length === 1){
            minutes = `0${this.state.minutes}`;
        }
        
        if(this.state.seconds.toString().length === 1){
            seconds = `0${this.state.seconds}`;
        } else {
            seconds = `${this.state.seconds}`;
        }

        return <span>{ `${minutes}:${seconds}` }</span>
    }
}

export default Timer;