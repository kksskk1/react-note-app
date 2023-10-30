import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import { useState } from 'react';

function Add(props) {
    const addpage = {
        width: '100%',
        height: '100vh',
    };

    const AddContainer = styled.div`
        width: 100%;
        height: 100vh;
    `;

    const ButtonContainer = styled.div`
        padding-top: 20px;
        padding-bottom: 50px;
    `;

    const btnBox = {
        paddingTop: '20px',
        paddingBottom: '50px',
    };
    

    let content = '';
    const inputContent = (event) => {
        content = event.target.value;
    }

    // 함수화
    const add = (event) => {
        let item = localStorage.getItem('content');
        let contentArr = item ? JSON.parse(item) : [];
        contentArr.push(content);

        // 데이터 저장하기
        localStorage.setItem("content", JSON.stringify(contentArr));

        alert('저장되었습니다.');

        window.location.replace('/');
    };
   
    return (
        <>
            <Header isSwitched={props.isSwitched} switchHandler={props.switchHandler} deleteAllBtn='n'/>
            <AddContainer>
                <TextArea onChange={inputContent}/>
                <ButtonContainer><Button onClick={add}>등록</Button></ButtonContainer>
            </AddContainer>
        </>    
    );
    
    /*return (
        <div style={addpage}>
            <TextArea height='80%' onChange={inputContent}/>
            <div style={btnBox}>
                <Button onClick={add}>등록</Button>
            </div>
        </div>    
    );*/
}

export default Add;