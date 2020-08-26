import React from 'react';
import styled from 'styled-components';
import restaurant from '../assets/images/restaurant.png';
import chat from '../assets/icons/chat.svg';
import heart from '../assets/icons/heart.svg';

const Container = styled.div`
	width: 342px;
	height: 100px;
	background-color: #ffffff;
	border-radius: 24px;
	box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 8px 29px 8px 8px;
	position: relative;
	margin-top: 36px;
`;

const Image = styled.img`
	width: 84px;
	height: 84px;
	border-radius: 20px;
	filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
`;

const TextContainer = styled.div`
	text-align: start;
	margin-left: 16px;
`;

const ButtonContainer = styled.div`
	position: absolute;
	right: 20px;
`;

const Button = styled.button`
	width: 40px;
	height: 40px;
	border-style: none;
	border-radius: 12px;
	box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
	background-color: #ffffff;

	&:nth-child(2) {
		margin-left: 14px;
	}
`;

const RestaurandCard = () => {
	return (
		<Container>
			<Image src={restaurant} alt='restaurant' />
			<TextContainer>
				<h4>Papa’s Pizzeria</h4>
				<p>3.2km</p>
			</TextContainer>
			<ButtonContainer>
				<Button>
					<img src={chat} alt='chat' />
				</Button>
				<Button>
					<img src={heart} alt='heart' />
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default RestaurandCard;
