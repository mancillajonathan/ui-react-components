import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	width: 145px;
	height: 174px;
	background: #ffffff;
	border-radius: 32px;
	border-style: none;
	& h1::after {
		content: '°';
	}
`;

const Weather = () => {
	return (
		<Container>
			<span role='img' aria-label='Sun'>
				☀️
			</span>
			<h1>24</h1>
			<p>Sunny</p>
		</Container>
	);
};

export default Weather;
