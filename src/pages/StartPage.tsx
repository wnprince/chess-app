import React from 'react';
import { RouteComponentProps } from '@reach/router';

const StartPage: React.FC<RouteComponentProps> = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-main">
            <div className="h-1/3 w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col justify-start items-center bg-secondary rounded-lg ">
                <div className="text-white font-bold text-3xl my-5">Choose One</div>
                <div className="flex my-3">
                    <div className="bg-main mx-3 h-16 w-16 rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Chess_tile_pl.svg"  height="64" width="64" alt=""/>
                    </div>
                    <div className="bg-main mx-3 h-16 w-16 rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Chess_put45.svg" height="64" width="64" alt=""/>
                    </div>
                    <div className="bg-main mx-3 h-16 w-16 rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Chess_pdt26.svg" height="64" width="64" alt=""/>
                    </div>
                </div>
                <button className="btn-start m-5">Start Game</button>
            </div>
        </div>
    )
}

export default StartPage;