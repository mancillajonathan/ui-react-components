import React from 'react'
import styled from 'styled-components'
import rightIcon from '../assets/icons/arrow-right.svg'

const ButtonContainer = styled.button`
    width: 56px;    
    height: 56px;
    background: linear-gradient(225deg, #8743FF 0%, #4136F1 100%);
    box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;

    img {
        width: 6px;
        height: 12px;
    }
`;

const RightButton = () => {
    return (
        <ButtonContainer>
            <img src={rightIcon} alt='right icon' />
        </ButtonContainer>
    )
}

export default RightButton
