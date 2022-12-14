import React from 'react';
import { RouteComponentProps } from '@reach/router';

import Scoreboard from '../components/Scoreboard';
import Board from '../components/Board';

const GamePage: React.FC<RouteComponentProps> = () => {
	return (
		<div className="h-screen w-screen lg:flex lg:justify-between lg:flex-row-reverse overflow-hidden sm:overflow-auto pt-1 bg-main">
        	<Scoreboard />
        	<Board />
		</div>
  	)
}

export default GamePage;