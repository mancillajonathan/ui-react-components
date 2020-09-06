import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 280px;
    height: 436px;
    background: #ffffff;
    border-radius: 32px;
    padding: 40px 16px 32px 16px;
    box-sizing: border-box;

    h4 {
        text-align: center;
        font-size: 18px;
    }
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    position: relative;

    .date ,.cvc {
        width: 45%;
    }

    .cvc {
        position: absolute;
        right: 0;
    }
`;

const Input = styled.input`
    width:100%;
    height: 56px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 14px;
    border-style: none;
    padding: 20px 15px;
    box-sizing: border-box;
    margin-bottom: 32px;
`;

const Button = styled.button`
    width: 100%;
    height: 56px;
    color: #ffffff;
    background: linear-gradient(270deg, #8743FF 0%, #4136F1 100%);
    box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
    border-radius: 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    border-style: none;
    filter: drop-shadow(0px 24px 48px rgba(99, 60, 247, 0.15));
`;

const AddNewCard = () => {
    return (
        <Container>
            <h4>Add new card</h4>
            <Form>
                <Input type='number' placeholder='Card number...'></Input>
                <Input type='text' placeholder='Owner name'></Input>
                <Input type='month' placeholder='Exp. date' className='date'></Input>
                <Input type='number' placeholder='CVC' max="999" className='cvc'></Input>
                <Button>Save</Button>
            </Form>
        </Container>
    )
}

export default AddNewCard
