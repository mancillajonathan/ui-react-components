import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/profile_mark.png';
import phone from '../assets/icons/phone.svg';
import chat from '../assets/icons/chat.svg';

const Container = styled.div`
	width: 242px;
	height: 327px;
	position: relative;

	.btn-phone {
		right: 0px;
		z-index: 1;
	}

	.btn-chat {
		right:56px;
		z-index: 2;
	}
`;

const ProfileBackground = styled.div`
	width: 232px;
	height: 314px;
	background-color: #ffffff;
	border-radius: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
`;

const ProfileImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 20px;
	filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
`;

const Name = styled.h4`
	font-weight: 600;
	font-size: 18px;
	line-height: 14px;
	margin-top: 28px;
	margin-bottom: 10px;
`;

const Profession = styled.p`
	font-size: 12px;
	line-height: 14px;
	opacity: 0.6;
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
	top: -10px;
`;

const Profile = () => {
	return (
		<Container>
			<FloatButton className='btn-phone'>
				<img src={phone} alt='phone' />
			</FloatButton>
			<FloatButton className='btn-chat'>
				<img src={chat} alt='chat' />
			</FloatButton>
			{/* <FloatButton /> */}
			<ProfileBackground>
				<ProfileImage src={profile} alt='picture' />
				<Name>Mark Philips</Name>
				<Profession>Teacher</Profession>
			</ProfileBackground>
		</Container>
	);
};

export default Profile;
