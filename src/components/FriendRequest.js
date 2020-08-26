import React from 'react';
import styled from 'styled-components';
import friendRequestImg from '../assets/images/friendRequest.png';
import acceptIcon from '../assets/icons/accept.svg';
import cancelIcon from '../assets/icons/cancel.svg';

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
	font-size: 10px;
	text-align: center;
	filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.16));
	border-radius: 20px;
`;

const TextContainer = styled.div`
	margin-left: 16px;
`;

const ButtonContainer = styled.div`
	position: absolute;
	right: 20px;

	button {
		width: 40px;
		height: 40px;
		border-style: none;
		border-radius: 12px;

		&:nth-child(1) {
			background: rgba(206, 0, 0, 0.1);
		}

		&:nth-child(2) {
			margin-left: 14px;
			background: rgba(0, 160, 6, 0.1);
		}
	}
`;

const FriendRequest = () => {
	return (
		<Container>
			<Image src={friendRequestImg} alt='Friend request' />
			<TextContainer>
				<h4>Alex Traier</h4>
				<p>Friend request</p>
			</TextContainer>
			<ButtonContainer>
				<button>
					<img src={cancelIcon} alt='cancel' />
				</button>
				<button>
					<img src={acceptIcon} alt='accept' />
				</button>
			</ButtonContainer>
		</Container>
	);
};

export default FriendRequest;
