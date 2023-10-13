import React from "react";
import Toggle from './Toggle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaNotesMedical, FaRegNoteSticky } from "react-icons/fa6";


function Header() {
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

        .add-btn {
            :hover {
                color: darkgrey;
            }
        }

        > span {
            color: white;
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
    
    return (
        <TitleContainer>
            <LinkItem to='/'>
                <span><FaRegNoteSticky/></span>
                <span className="title">Notes</span>
            </LinkItem>
            <LinkItem to='/add' className='add-btn'><FaNotesMedical/></LinkItem>
            
            <ToggleContainer><Toggle/></ToggleContainer>
        </TitleContainer>
    );
}

export default Header;
