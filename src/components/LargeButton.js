import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	padding: 20px 132px;
	height: 56px;
	background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	border-radius: 16px;
	border-style: none;
	margin: 10px 15px;

	@media screen and (max-width: 500px) {
		padding: 20px 120px;
	}
`;

const Text = styled.p`
	width: 100%;
	min-width: 90px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 600;
	line-height: 14px;
	margin: 0;
	opacity: 1;
`;

const LargeButton = () => {
	return (
		<Container>
			<Text>Button text</Text>
		</Container>
	);
};

export default LargeButton;
