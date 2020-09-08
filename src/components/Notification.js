import React from 'react'
import styled from 'styled-components'
import notification from '../assets/icons/notification.svg'

const Container = styled.div`
    width: 280px;
    height: 461px;
    background-color: #ffffff;
    border-radius: 32px;
    padding: 33px 17px 30px 17px;
    box-sizing: border-box;
    text-align: center;

    img { 
        margin-bottom: 10px;
    }
`;


const Notification = () => {
    return (
        <Container>
            <img src={notification} alt='notification'></img>
            <h4>Notifications</h4>
        </Container>
    )
}

export default Notification
