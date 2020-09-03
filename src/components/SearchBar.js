import React from 'react';
import styled from 'styled-components';
import sliders from '../assets/icons/sliders.svg';
import search from '../assets/icons/search.svg';

const Container = styled.div`
	width: 344px;
	height: 56px;
	display: flex;
	align-items: center;
	position: relative;

	.searchIcon {
		width: 12px;
		height: 12px;
		position: absolute;
		left: 20px;
		z-index: 1;
	}
`;

const InputSearch = styled.input`
	width: 328px;
	height: 100%;
	background: #ffffff;
	border-radius: 16px;
	border-style: none;
	padding: 20px 0 20px 44px;
	box-sizing: border-box;

	&::placeholder {
		font-family: 'Poppins';
		font-size: 12px;
		line-height: 14px;
		color: #000000;
		opacity: 0.4;
	}
`;

const ControlButton = styled.button`
	width: 44px;
	height: 44px;
	border-style: none;
	border-radius: 14px;
	background: linear-gradient(225deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	filter: drop-shadow(0px 24px 48px rgba(99, 60, 247, 0.15));
	position: absolute;
	right: 0px;
`;

const SearchBar = () => {
	return (
		<Container>
			<img src={search} alt='search' className='searchIcon' />
			<InputSearch type='text' placeholder='Search anything...'></InputSearch>
			<ControlButton>
				<img src={sliders} alt='sliders' />
			</ControlButton>
		</Container>
	);
};

export default SearchBar;
