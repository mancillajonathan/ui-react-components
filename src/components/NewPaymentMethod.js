import React from 'react';
import styled from 'styled-components';
import wallet from '../assets/icons/wallet.svg';
import visa from '../assets/icons/visa.svg';
import mastercard from '../assets/icons/mastercard.svg';
import paypal from '../assets/icons/paypal.svg';
import google from '../assets/icons/google.svg';

const Container = styled.div`
	width: 280px;
	height: 448px;
	background: #ffffff;
	border-radius: 32px;
	padding: 32px 16px;
	box-sizing: border-box;

	img {
		display: block;
		margin: auto;
	}

	h4 {
		margin-top: 20px;
		margin-bottom: 10px;
		text-align: center;
	}

	input {
		background-color: red;
		border: 1px solid red;
		&:checked {
			background-color: yellow;
			border: 1px solid yellow;
		}
	}
`;

const MethodPayment = styled.div`
	display: flex;
	align-items: center;
	margin: 28px 0;

	img {
		margin-left: 12px;
	}
`;

const Button = styled.button`
	width: 248px;
	height: 56px;
	border-style: none;
	margin-top: 14px;

	font-weight: 600;
	font-size: 14px;
	line-height: 14px;
	color: #ffffff;

	background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
	box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
	border-radius: 16px;
	filter: drop-shadow(0px 24px 48px rgba(99, 60, 247, 0.15));
`;

const NewPaymentMethod = () => {
	return (
		<Container>
			<img src={wallet} alt='wallet' />
			<h4>New payment method</h4>
			<MethodPayment>
				<input type='radio' id='method-visa' name='payment' value='visa' />
				<label htmlFor='method-visa'>
					<span className='checkmark'></span>
					<img src={visa} alt='visa' />
				</label>
			</MethodPayment>
			<MethodPayment>
				<input
					type='radio'
					id='method-visa'
					name='payment'
					value='mastercard'
				/>
				<label htmlFor='method-visa'>
					<img src={mastercard} alt='mastercard' />
				</label>
			</MethodPayment>
			<MethodPayment>
				<input type='radio' id='method-visa' name='payment' value='paypal' />
				<label htmlFor='method-visa'>
					<img src={paypal} alt='paypal' />
				</label>
			</MethodPayment>
			<MethodPayment>
				<input
					type='radio'
					id='method-visa'
					name='payment'
					value='google-pay'
				/>
				<label htmlFor='method-visa'>
					<img src={google} alt='google-pay' />
				</label>
			</MethodPayment>
			<Button>Continue</Button>
		</Container>
	);
};

export default NewPaymentMethod;
