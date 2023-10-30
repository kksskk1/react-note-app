import React, { useState } from "react";
import styled from 'styled-components';

function Toggle(props) {
    const ToggleContainer = styled.div`
        position: relative;
        cursor: pointer;
        float: right;

        > .toggle-container {
            width: 50px;
            height: 24px;
            border-radius: 30px;
            background-color: rgb(233,233,234);}
        > .toggle--checked {
            background-color: rgb(0,200,102);
            transition : 0.5s
        }

        > .toggle-circle {
            position: absolute;
            top: 1px;
            left: 1px;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background-color: rgb(255,254,255);
            transition : 0.5s
        } >.toggle--checked {
            left: 27px;
            transition : 0.5s
        }
    `;

    const [isOn, setisOn] = useState(props.isSwitched);

    // isOn의 상태를 변경하는 메소드를 구현
    const toggleHandler = () => {
        setisOn(!isOn)
    };

    return (
        <ToggleContainer onClick={toggleHandler}>
            <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
            <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
        </ToggleContainer>
    );
}

export default Toggle;
