import React from 'react';
import './App.css';
import PlayMusicSmall from './components/PlayMusicSmall';
import FriendRequest from './components/FriendRequest';
import RestaurandCard from './components/RestaurandCard';
import ProductCard from './components/ProductCard';
import Weather from './components/Weather';
import SmallButton from './components/SmallButton';
import LargeButton from './components/LargeButton';
import ProductCardMd from './components/ProductCardMd';

function App() {
	return (
		<div className='App'>
			<h1 className='App__title'>UI React Components ⚛</h1>
			<SmallButton />
			<ProductCardMd />
			<LargeButton />
			<PlayMusicSmall />
			<FriendRequest />
			<RestaurandCard />
			<ProductCard />
			<Weather />
		</div>
	);
}

export default App;
