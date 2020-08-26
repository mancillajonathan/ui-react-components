import React from 'react';
import styled from 'styled-components';

import PlayMusicSmall from '../components/PlayMusicSmall';
import FriendRequest from '../components/FriendRequest';
import RestaurandCard from '../components/RestaurandCard';
import ProductCard from '../components/ProductCard';

const Layout = styled.div`
	display: grid;
	width: 750px;
	justify-content: center;
	grid-template-columns: 342px 342px;
	grid-template-rows: 100px 100px;
	grid-row-gap: 36px;
	grid-column-gap: 40px;

	@media screen and (max-width: 750px) {
		width: auto;
		grid-template-columns: 342px;
		grid-template-rows: repeat(4, 100px);
		grid-row-gap: 10px;
	}
`;

const SmallCardsLayout = () => {
	return (
		<Layout>
			<PlayMusicSmall />
			<FriendRequest />
			<RestaurandCard />
			<ProductCard />
		</Layout>
	);
};

export default SmallCardsLayout;
