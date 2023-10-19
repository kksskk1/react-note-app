import React from "react";
import { createGlobalStyle } from 'styled-components';
import { BsFillTrashFill } from "react-icons/bs";

function Item(props) {
    
    const ItemStyle = createGlobalStyle`
        .item {
            width: calc(100% - 30px);
            height: 250px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 30px;
            margin-bottom: 20px;
            padding: 10px;
            word-break: break-word;
            text-align: center;
        }    

        .trash {
            float: right;
            cursor: pointer;
        }
    `;

    const itemBox = {
        width: 'calc(100% / 5)',
    };
    
    const content = props.content ? props.content : '';
    const index = props.index ? props.index : 0;
    const deleteNote = props.deleteNote ? props.deleteNote : null;
    
    return (
        <>
            <ItemStyle/>
            <div style={itemBox}>
                <div className='item'>
                    <span className='trash' onClick={() => {deleteNote(index)}}><BsFillTrashFill/></span>
                    <div>{content}</div>
                </div>
            </div>
        </>
    );
}

export default Item;
