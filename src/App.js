import React from 'react';
import './App.css';
import Weather from './components/Weather';
import SmallButton from './components/SmallButton';
import LargeButton from './components/LargeButton';
import ProductCardMd from './components/ProductCardMd';
import SmallCardsLayout from './layouts/SmallCardsLayout';

function App() {
	return (
		<div className='App'>
			<h1 className='App__title'>UI React Components ⚛</h1>
			<SmallCardsLayout />
			<SmallButton />
			<ProductCardMd />
			<LargeButton />
			<Weather />
		</div>
	);
}

export default App;
