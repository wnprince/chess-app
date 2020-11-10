import React from 'react';
import Square from './Square';
import { GameContext } from '../contexts/GameContext';
import './Board.scss';

class Board extends React.Component {
    static contextType = GameContext;

    constructor(props) {
        super(props);
        this.setBoard = this.setBoard.bind(this);

        this.state = {
            isWhite: false
        }
    }

    setBoard() {
        let board = [];
        for(let i=1;i<=8;i++){
            let row = [];
            for(let j=1;j<=8;j++) {
                let rank, file;
                if(this.state.isWhite){
                    file = 96 + i;
                    rank = (117 - j) % 9;
                } else {
                    file = 105-i;
                    rank = j;
                }
                let name = `${String.fromCharCode(file)}${rank}`;
                row.push(<Square key={name} name={name} color={( ((i%2 !== 0) && (j%2 !== 0) || (i%2 === 0) && (j%2 === 0)) ? 'light' : 'dark')} coord={`${i}${j}`}/>);
            }
            board.push(row);
        }
        return board;
    }

    render() {
        
        return (
            <section className="Board-wrapper">
                {this.setBoard()}
            </section>
        )
    }
}

export default Board;