import React from 'react';
import './App.css';
import PlayMusicSmall from './components/PlayMusicSmall';
import FriendRequest from './components/FriendRequest';

function App() {
	return (
		<div className='App'>
			<h1 className='App__title'>UI React Components ⚛</h1>
			<PlayMusicSmall />
			<FriendRequest />
		</div>
	);
}

export default App;
