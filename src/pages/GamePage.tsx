import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

import Scoreboard from '../components/Scoreboard';
import Board from '../components/Board';
import { AppContext } from '../context/AppContext';

const GamePage: React.FC<RouteComponentProps> = () => {
	const ctx = useContext(AppContext);

	useEffect(() => {
		ctx?.toggleGameOver();
		return () => ctx?.reset();
	// eslint-disable-next-line
	}, [])
	return (
		<div className="h-screen w-screen lg:flex lg:justify-between lg:flex-row-reverse overflow-hidden sm:overflow-auto pt-1 bg-main">
        	<Scoreboard />
        	<Board />
		</div>
  	)
}

export default GamePage;