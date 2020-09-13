import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/profile-circle.png';
import phone from '../assets/icons/phone.svg';
import chat from '../assets/icons/chat.svg';

const Container = styled.div`
	width: 241px;
	height: 293px;
	position: relative;

	.btn-phone {
		right: 0px;
		z-index: 1;
	}

	.btn-chat {
		right: 56px;
		z-index: 2;
	}
`;

const ProfileBackground = styled.div`
	width: 231px;
	height: 280px;
	background-color: #ffffff;
	text-align: center;
	border-radius: 32px;
	padding: 36px 44px;
	box-sizing: border-box;
`;

const ProfilePicture = styled.img`
	width: 87px;
	height: 87px;
	border-radius: 50%;
	display: block;
	margin: 0 auto;
`;

const Name = styled.h4`
	font-weight: 600;
	font-size: 18px;
	line-height: 14px;
	margin-top: 20px;
`;

const Profession = styled.p`
	font-size: 12px;
	line-height: 14px;
	opacity: 0.6;
	margin: 8px 0 20px 0;
`;

const SocialContainer = styled.div`
	width: 100%;
	height: 44px;
	display: flex;
`;

const SocialFollowsContainer = styled.div`
	width: 50%;
	height: 100%;
	text-align: center;
	text-transform: uppercase;
	position: relative;

	p {
		font-size: 11px;
		line-height: 14px;
		letter-spacing: 1px;
		opacity: 0.4;
	}

	span {
		margin-top: 12px;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 26px;
		line-height: 14px;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

const FloatButton = styled.button`
	width: 44px;
	height: 44px;
	background: #ffffff;
	border-radius: 14px;
	border-style: none;
	position: absolute;
	box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
	border-radius: 14px;
	top: -15px;
`;

const ProfileMoreInfo = () => {
	return (
		<Container>
			<FloatButton className='btn-phone'>
				<img src={phone} alt='phone' />
			</FloatButton>
			<FloatButton className='btn-chat'>
				<img src={chat} alt='chat' />
			</FloatButton>
			<ProfileBackground>
				<ProfilePicture src={profile} alt='profile' />
				<Name>Mark Phillips</Name>
				<Profession>Teacher</Profession>
				<SocialContainer>
					<SocialFollowsContainer>
						<p>Follows</p>
						<span>423</span>
					</SocialFollowsContainer>
					<SocialFollowsContainer>
						<p>Following</p>
						<span>123</span>
					</SocialFollowsContainer>
				</SocialContainer>
			</ProfileBackground>
		</Container>
	);
};

export default ProfileMoreInfo;
