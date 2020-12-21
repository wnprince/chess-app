import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
interface Props {
    name: string;
    color: string;
}

const Square: React.FC<Props> = (props) => {
    const ctx = useContext(AppContext);
    let img: string = '';
    let [file, rank]: string[] = props.name.split('');

    if(rank === '7'){
        img = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
    } else if(rank === '2'){
        img = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    } else if(rank === '1'){
        if(file === 'a' || file === 'h'){
            img = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
        } else if(file === 'b' || file === 'g'){
            img = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
        } else if(file === 'c' || file === 'f'){
            img = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
        } else if(file === 'd'){
            img = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
        } else if(file === 'e'){
            img = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
        }
    } else if(rank === '8'){
        if(file === 'a' || file === 'h'){
            img = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
        } else if(file === 'b' || file === 'g'){
            img = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
        } else if(file === 'c' || file === 'f'){
            img = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
        } else if(file === 'd'){
            img = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
        } else if(file === 'e'){
            img = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
        }
    }

    function onClicked() {
        if(props.name === ctx?.question){
            ctx?.setScore(ctx?.score + 1);
            ctx?.changeQuestion();
        }
    }
    
    return (
        <div onClick={onClicked} className={`h-12 w-12 sm:h-20 flex-grow sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 ${props.color === 'dark' ? 'bg-green-500': 'bg-gray-50'}`}>
            {img ? <img height={110} width={110} alt="piece" src={img} /> : null}
        </div>
    )
}

export default Square;