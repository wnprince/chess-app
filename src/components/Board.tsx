import React from 'react';

import Square from './Square';

const Board = () => {
    let board = [];
    for(let i=1;i<=8;i++){
        let row = [];
        for(let j=1;j<=8;j++) {
            let rank, file;
            if(true){
                file = 96 + i;
                rank = (117 - j) % 9;
            } else {
                file = 105-i;
                rank = j;
            }
            let name = `${String.fromCharCode(file)}${rank}`;
            // eslint-disable-next-line
            row.push(<Square key={name} name={name} color={( ((i%2 !== 0) && (j%2 !== 0) || (i%2 === 0) && (j%2 === 0)) ? 'light' : 'dark')} coord={`${i}${j}`}/>);
        }
        board.push(row);
    }

    console.log(board);
    return (
        <div className="p-1">
            { board.map(row => (
                <div className="flex flex-row">
                    { row }
                </div>
            )) }
        </div>
    )
}

export default Board;