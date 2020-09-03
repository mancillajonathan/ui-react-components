import React from 'react';
import styled from 'styled-components';
import bookCover from '../assets/images/bookCover.png';

const Container = styled.div`
	background-color: #ffffff;
	border-radius: 32px;
	width: 342px;
	height: 176px;
	padding: 23px 32px 23px 23px;
	box-sizing: border-box;
`;

const BookContainer = styled.div`
	width: 287px;
	height: 130px;
	display: flex;

	img {
		filter: drop-shadow(0px 30px 50px rgba(0, 0, 0, 0.1));
	}
`;

const TextContainer = styled.div`
	margin-left: 18px;

	h4,
	p {
		margin: 0;
	}

	h6 {
		margin: 4px 0 13px 0;
		font-size: 12px;
		font-weight: normal;
		opacity: 0.6;
		line-height: 14px;
	}

	p {
		line-height: 18px;
	}
`;

const BookCard = () => {
	return (
		<Container>
			<BookContainer>
				<img src={bookCover} alt='book' />
				<TextContainer>
					<h4>Boring Girls</h4>
					<h6>Sara Taylor</h6>
					<p>
						Amazing, very interesting novel by Sara Taylor. Must read for
						everyone!
					</p>
				</TextContainer>
			</BookContainer>
		</Container>
	);
};

export default BookCard;
