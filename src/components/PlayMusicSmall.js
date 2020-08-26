import React from 'react';
import styled from 'styled-components';
import './styles/playMusicSmall.css';
import playMusicImg from '../assets/images/playMusicSmall.png';
import playIcon from '../assets/icons/play.svg';

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

const Button = styled.button`
	width: 40px;
	height: 40px;
	background: linear-gradient(225deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	border-radius: 28px;
	border-style: none;
	color: #ffffff;
	position: absolute;
	box-sizing: border-box;
	right: 29px;
`;

const ButtonImg = styled.img`
	width: 8.57px;
	height: 12.86px;
	display: block;
	margin: auto 10px;
`;

const PlayVideo = () => {
	return (
		<Container>
			<Image src={playMusicImg} alt='playMusicImg' />
			<TextContainer>
				<h4>Find my way</h4>
				<p>DaBaby</p>
			</TextContainer>
			<Button>
				<ButtonImg src={playIcon} alt='play-icon' />
			</Button>
		</Container>
	);
};

export default PlayVideo;
