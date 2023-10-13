import styled from 'styled-components';
import Button from '../components/Button';


function Add() {
    const AddContainer = styled.div`
        width: 100%;
        height: 100vh;
    `;

    const TextArea = styled.textarea`
        width: 100%;
        height: 100%;
        font-size: 18px;
        border-radius: 20px;
        opacity: 70%;
        box-sizing: border-box;
        padding: 20px;
    `;

    const ButtonContainer = styled.div`
        padding-top: 20px;
        padding-bottom: 20px;
    `;

    return (
        <AddContainer>
            <TextArea/>
            <ButtonContainer><Button>등록</Button></ButtonContainer>
        </AddContainer>
    );
}

export default Add;