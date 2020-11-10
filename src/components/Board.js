import React from 'react';
import Square from './Square';
import { GameContext } from '../contexts/GameContext';
import './Board.scss';

class Board extends React.Component {
    static contextType = GameContext;
    render() {
        let board = [];
        for(let i=1;i<=8;i++){
            let row = [];
            for(let j=1;j<=8;j++) {
                let name = `${String.fromCharCode(96+i)}${(117-j) % 9}`;
                row.push(<Square key={name} name={name} color={( ((i%2 !== 0) && (j%2 !== 0) || (i%2 === 0) && (j%2 === 0)) ? 'light' : 'dark')} coord={`${i}${j}`}/>);
            }
            board.push(row);
        }
        return (
            <section className="Board-wrapper">
                {board}
            </section>
        )
    }
}

export default Board;