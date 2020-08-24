import React from 'react';
import './styles/restaurandCard.css';
import restaurant from '../assets/images/restaurant.png';
import chat from '../assets/icons/chat.svg';
import heart from '../assets/icons/heart.svg';

const RestaurandCard = () => {
	return (
		<div className='RestaurandCard__container'>
			<img
				src={restaurant}
				alt='restaurant'
				className='ReactaurandCard__image'
			/>
			<div className='RestaurandCard__text-container'>
				<h4>Papa’s Pizzeria</h4>
				<p>3.2km</p>
			</div>
			<div className='RestaurandCard__button-container'>
				<button className='RestaurandCard__button-coment'>
					<img src={chat} alt='chat' />
				</button>
				<button className='RestaurandCard__button-like'>
					<img src={heart} alt='heart' />
				</button>
			</div>
		</div>
	);
};

export default RestaurandCard;
