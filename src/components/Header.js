import React from "react";
import Toggle from './Toggle';
import styled from 'styled-components';
import { FaNotesMedical, FaRegNoteSticky } from "react-icons/fa6";


function Header() {
    const TitleContainer = styled.div`
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
        color: white;
        display: flex;
        align-items: center;

        > span.title {
            margin-left: 10px;
            margin-right: 10px;
        }

        > span.toggle {
            margin-left: 50px;
        }
    `;
    

    return (
        <TitleContainer>
            <span><FaRegNoteSticky/></span>
            <span className="title">Notes</span>
            <span><FaNotesMedical/></span>
            <span className="toggle"><Toggle/></span>
        </TitleContainer>
    );
}

export default Header;
