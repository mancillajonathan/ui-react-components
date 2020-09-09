import React from 'react'
import styled from 'styled-components'
import profile from '../assets/images/profile_mark.png'

const white = '#ffffff'


const Container = styled.div`
    width: 242px;
    height: 327px;  
`;

const ProfileBackground = styled.div`
    width: 232px;
    height: 314px;
    background-color: white;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
`;

const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
`;

const Name = styled.h4`
    font-weight: 600;
    font-size: 18px;
    line-height: 14px;
    margin-top: 28px;
    margin-bottom: 10px;
`;

const Profession = styled.p`
    font-size: 12px;
    line-height: 14px;
    opacity: 0.6;
`;

const Profile = () => {
    return (
        <Container>
            <ProfileBackground>
                <ProfileImage src={profile} alt='picture'/>
                <Name>Mark Philips</Name>
                <Profession>Teacher</Profession>
            </ProfileBackground>
        </Container>
    )
}


export default Profile
