import React, { Fragment } from 'react';
import './App.css';
import Weather from './components/Weather';
import SmallButton from './components/SmallButton';
import LargeButton from './components/LargeButton';
import ProductCardMd from './components/ProductCardMd';
import SmallCardsLayout from './layouts/SmallCardsLayout';
import CollectionCard from './components/CollectionCard';
import FilesUploading from './components/FilesUploading';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import NewPaymentMethod from './components/NewPaymentMethod';

function App() {
	return (
		<Fragment>
			<h1 className='App__title'>UI React Components ⚛</h1>
			<div className='App'>
				<NewPaymentMethod />
				<BookCard />
				<SearchBar />
				<FilesUploading />
				<SmallCardsLayout />
				<Weather />
				<ProductCardMd />
				<SmallButton />
				<LargeButton />
				<CollectionCard />
			</div>
		</Fragment>
	);
}

export default App;
