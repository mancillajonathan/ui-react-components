import React from 'react';
import './styles/friendRequest.css';
import friendRequestImg from '../assets/images/friendRequest.png';
import acceptIcon from '../assets/icons/accept.svg';
import cancelIcon from '../assets/icons/cancel.svg';

const FriendRequest = () => {
	return (
		<div className='friendRequest__container'>
			<img
				src={friendRequestImg}
				alt='friend-request'
				className='friendRequest__image'
			/>
			<div className='friendRequest__background'>
				<div className='friendRequest__text-container'>
					<h4>Alex Traier</h4>
					<p>Friend request</p>
				</div>
				<div className='friendRequest__button-container'>
					<button className='friendRequest__button-cancel'>
						<img
							src={cancelIcon}
							alt='cancel'
							className='friendRequest__icon'
						/>
					</button>
					<button className='friendRequest__button-accept'>
						<img
							src={acceptIcon}
							alt='accept'
							className='friendRequest__icon'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FriendRequest;
