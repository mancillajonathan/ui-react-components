import React from 'react';
import styled from 'styled-components';
import mug from '../assets/images/mug.png';
import purchase from '../assets/icons/purchase.svg';

const Container = styled.div`
	width: 180px;
	height: 240px;
	background-color: #ffffff;
	padding: 10px 10px 12px 10px;
	box-sizing: border-box;
	border-radius: 20px;
	box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
`;

const Image = styled.img`
	width: 160px;
	height: 120px;
	margin-bottom: 16px;
	filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.08));
`;

const Title = styled.h4`
	font-size: 15px;
	margin-bottom: 4px;
	font-weight: 600;
	line-height: 14px;
`;

const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 3px;
`;

const Price = styled.span`
	font-weight: 600;
	font-size: 12px;
	line-height: 14px;
	color: #4136f1;
	&::before {
		content: '$';
	}
`;

const Purchase = styled.button`
	width: 40px;
	height: 40px;
	border-style: none;
	background: linear-gradient(225deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	border-radius: 12px;
`;

const ProductCardMd = () => {
	return (
		<Container>
			<Image src={mug} />
			<Title>Coffee mug</Title>
			<p>Hustle edition</p>
			<InfoContainer>
				<Price>7.99</Price>
				<Purchase>
					<img src={purchase} alt='purchase' />
				</Purchase>
			</InfoContainer>
		</Container>
	);
};

export default ProductCardMd;
