import React, { useState } from "react";
import Toggle from './Toggle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaNotesMedical, FaRegNoteSticky } from "react-icons/fa6";
import { BsFillTrashFill } from "react-icons/bs";


function Header(props) {
    const TitleContainer = styled.div`
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        
        .title {
            margin-left: 10px;
            margin-right: 10px;
        }

        .icon-btn {
            :hover {
                color: darkgrey;
            }
        }

        > span {
            color: white;
        }

        .all-trash {
            cursor: pointer;
        }
    `;

    const ToggleContainer = styled.div`
        margin-left: 50px;
    `;

    // Link 컴포넌트 스타일 적용
    const LinkItem = styled(Link)`
        color: white;
        text-decoration: none;
    `;

    // 삭제버튼 노출 여부
    const deleteAllBtn = props.deleteAllBtn;

    // 전체 삭제
    const deleteAll = () => {
        if(window.confirm('전체 삭제하시겠습니까?')) {
            localStorage.setItem('content', []);
            props.setContentArr([]);
            alert('삭제되었습니다.');
        }
    }

    const changeBackground = () => {
        props.switchHandler();
    }
  
    return (
        <TitleContainer>
            <LinkItem to='/'>
                <span><FaRegNoteSticky/></span>
                <span className="title">Notes</span>
            </LinkItem>
            <LinkItem to='/add' className='add-btn icon-btn'><FaNotesMedical/></LinkItem>
            {(deleteAllBtn === 'y') && <span className='all-trash icon-btn' onClick={deleteAll}><BsFillTrashFill/></span>}
            <ToggleContainer onClick={changeBackground}><Toggle isSwitched={props.isSwitched}/></ToggleContainer>
        </TitleContainer>
    );
}

export default Header;
