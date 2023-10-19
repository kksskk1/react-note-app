import React, { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import Item from './Item';

function ItemList() {
    const ItemListStyle = createGlobalStyle`
        .item-list {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
    `;

    // 로컬 스토리지에 저장된 데이터 조회
    let item = localStorage.getItem('content');
    
    const [contentArr, setContentArr] = useState(item ? JSON.parse(item) : []);


    // 삭제
    const deleteNote = (deletedIndex) => {
        if(window.confirm('삭제하시겠습니까?')) {
            let item = localStorage.getItem('content');
            let contentArr = item ? JSON.parse(item) : [];
            contentArr.splice(deletedIndex, 1);
            localStorage.setItem("content", JSON.stringify(contentArr));

            setContentArr(contentArr);
            
            alert('삭제되었습니다.');
        }
    };
    
    return (
        <>
            <ItemListStyle/>
            <div className='item-list'>
                {contentArr.length > 0 && contentArr.map((content, index) => (
                    <Item key={index} index={index} content={content} deleteNote={deleteNote}/>
                ))}
            </div>
        </>
    );
}

export default ItemList;
