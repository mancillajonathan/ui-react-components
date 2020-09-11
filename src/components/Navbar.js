import React from 'react';
import styled from 'styled-components';
import home from '../assets/icons/home.svg';
import category from '../assets/icons/category.svg';
import profile from '../assets/icons/profile.svg';

const Container = styled.div`
	height: 100%;
	background-color: #ffffff;
	border-radius: 21px;
	padding: 36px 48px;
	box-sizing: border-box;
`;

const IconsContainer = styled.div`
	width: 279px;
	height: 20px;
	display: flex;
	justify-content: space-around;

	.selected {
		filter: drop-shadow(0px 0px 30px rgba(66, 54, 241, 0.3));
	}
`;

const Navbar = () => {
	return (
		<Container>
			<IconsContainer>
				<img src={home} alt='home' className='selected'/>
				<img src={category} alt='category' />
				<img src={profile} alt='profile' />
			</IconsContainer>
		</Container>
	);
};

export default Navbar;
