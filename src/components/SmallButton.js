import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	padding: 20px 32px;
	height: 56px;
	background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	border-radius: 16px;
	border-style: none;
`;

const Text = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 14px;
	color: #ffff;
	margin: 0;
	padding: 1px 0;
	opacity: 1;
`;

const SmallButton = () => {
	return (
		<Container>
			<Text>Button text</Text>
		</Container>
	);
};

export default SmallButton;
