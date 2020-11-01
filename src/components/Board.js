import React from 'react';
import Square from './Square';
import './Board.scss';

class Board extends React.Component {
    render() {
        let row = [];
        for(let i=1;i<=8;i++){
            for(let j=1;j<=8;j++) {
                // eslint-disable-next-line
                row.push(<Square color={( ((i%2 !== 0) && (j%2 !== 0) || (i%2 === 0) && (j%2 === 0)) ? 'light' : 'dark')} coord={`${i}${j}`}/>);
            }
        }
        return (
            <div className="wrapper">
                {row}
            </div>
        )
    }
}

export default Board;