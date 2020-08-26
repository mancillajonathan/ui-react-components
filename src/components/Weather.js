import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	width: 145px;
	height: 174px;
	background: #ffffff;
	border-radius: 32px;
	border-style: none;

	span {
		font-size: 22px;
	}

	h1 {
		font-style: normal;
		font-weight: 600;
		font-size: 60px;
		line-height: 90px;
		margin: 0;
		position: relative;
	}

	& h1::after {
		content: '°';
		font-size: 16px;
		position: absolute;
		top: -15px;
	}

	p {
		font-size: 13px;
		line-height: 14px;
		opacity: 1;
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
