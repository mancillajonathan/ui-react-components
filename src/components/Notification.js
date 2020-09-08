import React from 'react'
import styled from 'styled-components'
import notification from '../assets/icons/notification.svg'
import anna from '../assets/images/anna.png'
import tom from '../assets/images/tom.png'
import amy from '../assets/images/amy.png'

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

    h4 {
        margin-bottom: 31px;
    }
`;

const UserContent = styled.div`
    width: 246px;
    height: 88px;
    display: flex;
    position: relative;
    justify-content: end;
    align-items: center;
    text-align: start;
    margin-bottom: 24px;

    .container {
        width: 212px;
        height: 100%;
        background-color: #ffffff;
        border-radius: 14px;
        padding-left: 48px;
        padding-top: 20px;
        box-sizing: border-box;
        filter: drop-shadow(0px 5px 40px rgba(0, 0, 0, 0.1));

        h4 {
            margin: 0;
        }
        
        span {
            font-size: 12px;
        }
    }

    img { 
        width: 68px;
        height: 68px;
        position: absolute;
        z-index: 1;
        left: 0;
        filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.16));
    }
`;

const Notification = () => {
    return (
        <Container>
            <img src={notification} alt='notification'></img>
            <h4>Notifications</h4>
            <UserContent>
                <img src={anna} alt='user'></img>
                <div className='container'>
                    <h4>Anna</h4>
                    <span>Liked your photo</span>
                </div>
            </UserContent>
            <UserContent>
                <img src={tom} alt='user'></img>
                <div className='container'>
                    <h4>Tom</h4>
                    <span>Commentend</span>
                </div>
            </UserContent>
            <UserContent>
                <img src={amy} alt='user'></img>
                <div className='container'>
                    <h4>Amy</h4>
                    <span>Wants to be friends</span>
                </div>
            </UserContent>
        </Container>
    )
}

export default Notification
