import React from "react";
import styled from 'styled-components';

function Item() {
    const ItemContainer = styled.div`
        width: calc(100% - 10px);
        height: 250px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 30px;
        margin-bottom: 20px;
    `;
    
    return (
        <ItemContainer/>
    );
}

export default Item;
