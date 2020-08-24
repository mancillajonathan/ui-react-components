import React from 'react';
import './styles/playMusicSmall.css';
import playMusicImg from '../assets/images/playMusicSmall.png';
import playIcon from '../assets/icons/play.svg';

const PlayVideo = () => {
	return (
		<div className='playMusicSmall__container'>
			<img
				src={playMusicImg}
				alt='playMusicImg'
				className='playMusicSmall__image'
			/>
			<div className='playMusicSmall__text-container'>
				<h4>Find my way</h4>
				<p>DaBaby</p>
			</div>
			<button className='playMusicSmall__button'>
				<img src={playIcon} alt='play-icon' />
			</button>
		</div>
	);
};

export default PlayVideo;
