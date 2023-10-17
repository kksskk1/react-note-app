import React from "react";
import styled from 'styled-components';
import Item from './Item';

function ItemList() {
    const itemList = {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    };

    const itemBox = {
        width: 'calc(100% / 5)',
    };

    // 로컬 스토리지에 저장된 데이터 조회
    let item = localStorage.getItem('content');
    let contentArr = item ? JSON.parse(item) : [];

    return (
        <div style={itemList}>
            {contentArr && contentArr.map((content) => (
                <div style={itemBox}>
                    <Item content={content}/>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
