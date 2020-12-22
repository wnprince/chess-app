import React, { useContext, useState } from 'react';
import { RouteComponentProps, Link } from '@reach/router';

import { AppContext } from '../context/AppContext';

const StartPage: React.FC<RouteComponentProps> = () => {
    const ctx = useContext(AppContext);
    const [mode, setMode] = useState(1);

    function toss() {
        return Math.random() >= 0.5;
    }

    function handleClick(e: React.MouseEvent) {
        type mode = {
            white: number;
            equal: number;
            black: number;
            [key: string]: number;
        }

        let modeMap: mode = {
            'white': 0,
            'equal': 1,
            'black': 2
        }

        setMode(modeMap[e.currentTarget.id]);

        if(e.currentTarget.id === 'equal'){
            console.log('yes')
            ctx?.updateIswhite(toss());
        } else {
            ctx?.updateIswhite(e.currentTarget.id === 'white');
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-main">
            <div className="h-1/3 w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col justify-start items-center bg-secondary rounded-lg ">
                <div className="text-white font-bold text-3xl my-5">Choose One</div>
                <div className="flex my-3">
                    <div id="white" onClick={handleClick} className={`bg-main mx-3 h-16 w-16 rounded-lg ${mode === 0 ? 'border-green-700 border-2' : ''}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Chess_tile_pl.svg"  height="64" width="64" alt=""/>
                    </div>
                    <div id="equal" onClick={handleClick} className={`bg-main mx-3 h-16 w-16 rounded-lg ${mode === 1 ? 'border-green-700 border-2' : ''}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Chess_put45.svg" height="64" width="64" alt=""/>
                    </div>
                    <div id="black" onClick={handleClick} className={`bg-main mx-3 h-16 w-16 rounded-lg ${mode === 2 ? 'border-green-700 border-2' : ''}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Chess_pdt26.svg" height="64" width="64" alt=""/>
                    </div>
                </div>
                <Link to='/game'>
                    <button className="btn-start m-5">Start Game</button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage;