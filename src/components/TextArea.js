import styled from 'styled-components';

function TextArea(props) {
    const TextareaStyle = styled.textarea`
        width: 100%;
        height: 80%;
        font-size: 18px;
        border-radius: 20px;
        opacity: 70%;
        box-sizing: border-box;
        padding: 20px;
        resize: none;
    `;

    return <TextareaStyle onChange={props.onChange}/>
}


export default TextArea;