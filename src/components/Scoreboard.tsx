import React from 'react';

const Scoreboard = () => {
    return (
        <div className="mx-1 h-20 p-2 bg-secondary lg:flex lg:flex-col lg:justify-between rounded-lg lg:mt-3 lg:w-full lg:h-28 xl:h-40">
            <div className="flex justify-between">
                <div className="text-white text-lg xl:text-3xl"><span className="font-semibold">Score:</span> 0</div>
                <div className="text-white text-lg xl:text-3xl"><span className="font-semibold">Time:</span> 00:00</div>
            </div>
            <div className="flex justify-center  text-4xl xl:text-8xl text-white font-bold">
                A5
            </div>
        </div>
    )
}

export default Scoreboard;