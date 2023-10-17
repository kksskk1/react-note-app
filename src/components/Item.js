import React from "react";
import styled from 'styled-components';

function Item(props) {
    const ItemContainer = styled.div`
        width: calc(100% - 30px);
        height: 250px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 30px;
        margin-bottom: 20px;
        padding: 10px;
        word-break: break-word;
        text-align: center;
    `;
    
    const content = props.content ? props.content : '';

    return (
        <ItemContainer>{content}</ItemContainer>
    );
}

export default Item;
