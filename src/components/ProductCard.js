import React from 'react';
import styled from 'styled-components';
import product from '../assets/images/product.png';

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

const Price = styled.span`
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	color: #4136f1;
	position: absolute;
	right: 18px;
	&::before {
		content: '$';
	}
`;

const ProductCard = () => {
	return (
		<Container>
			<Image src={product} />
			<TextContainer>
				<h4>Coffee mug</h4>
				<p>Beautiful and durable</p>
			</TextContainer>
			<Price>7.99</Price>
		</Container>
	);
};

export default ProductCard;
