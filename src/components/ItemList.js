import React from "react";
import styled from 'styled-components';
import Item from './Item';

function ItemList() {
    const ItemListContainer = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    `;

    const ItemBoxContainer = styled.div`
        width: calc(100% / 5);
    `;
    
    return (
        <ItemListContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
            <ItemBoxContainer><Item/></ItemBoxContainer>
        </ItemListContainer>
    );
}

export default ItemList;
