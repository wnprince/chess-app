import React from 'react';

import Square from './Square';

const Board = () => {
    let board = [];
    for(let i=1;i<=8;i++){
        let row = [];
        for(let j=1;j<=8;j++) {
            let rank, file;
            if(true){
                file = 96 + j;
                rank = (117 - i) % 9;
            } else {
                file = 105-j;
                rank = i;
            }
            let name = `${String.fromCharCode(file)}${rank}`;
            row.push(<Square key={name} name={name} color={( ((i%2 !== 0) && (j%2 !== 0) || (i%2 === 0) && (j%2 === 0)) ? 'light' : 'dark')} />);
        }
        board.push(row);
    }

    console.log(board);
    return (
        <div className="p-1 mt-3 flex flex-col items-center">
            { board.map((row, i) => (
                <div key={i} className="flex flex-row">
                    { row }
                </div>
            )) }
        </div>
    )
}

export default Board;