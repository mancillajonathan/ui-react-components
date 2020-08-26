import React from 'react';
import styled from 'styled-components';
import collection from '../assets/images/collection.png';
import arrowRight from '../assets/icons/arrow-right.svg';

const Container = styled.div`
	width: 192px;
	height: 280px;
	padding: 10px 10px 16px 10px;
	box-sizing: border-box;
	background-color: #ffffff;
	box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
	border-radius: 20px;
	text-align: center;
	margin: 10px;
`;

const Image = styled.img`
	width: 172px;
	height: 128px;
	filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.08));
`;

const Title = styled.p`
	font-size: 11px;
	line-height: 14px;
	letter-spacing: 0.4px;
	color: #4523c6;
	opacity: 0.6;
	margin: 22px 0 8px 0;
	text-transform: uppercase;
`;

const ItemTitle = styled.h4`
	font-weight: 600;
	font-size: 15px;
	line-height: 16px;
	margin: 0;
`;

const Button = styled.button`
	width: 40px;
	height: 40px;
	background: linear-gradient(225deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	border-radius: 12px;
	border-style: none;
	margin-top: 19px;
`;

const CollectionCard = () => {
	return (
		<Container>
			<Image src={collection} alt='collection' />
			<Title>New collection</Title>
			<ItemTitle>Summer outfits</ItemTitle>
			<Button>
				<img src={arrowRight} alt='arrow right' />
			</Button>
		</Container>
	);
};

export default CollectionCard;
