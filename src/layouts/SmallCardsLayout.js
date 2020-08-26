import React from 'react';
import styled from 'styled-components';

import PlayMusicSmall from '../components/PlayMusicSmall';
import FriendRequest from '../components/FriendRequest';
import RestaurandCard from '../components/RestaurandCard';
import ProductCard from '../components/ProductCard';

const Layout = styled.div`
	display: grid;
	width: auto;
	grid-template-columns: 342px 342px;
	grid-template-rows: 100px 100px;
	grid-row-gap: 40px;
	grid-column-gap: 40px;
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
