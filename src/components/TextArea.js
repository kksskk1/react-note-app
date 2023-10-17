import styled from 'styled-components';

function TextArea(props) {
    const textareaStyle = {
        width: (props.width ? props.width : '100%'),
        height: (props.height ? props.height : '100%'),
        fontSize: '18px',
        borderRadius: '20px',
        opacity: '70%',
        boxSizing: 'border-box',
        padding: '20px',
        resize: 'none',
    };

    const content = props.value ? props.value : '';
    const onChange = props.onChange ? props.onChange : null;


    return <textarea style={textareaStyle} value={content} onChange={onChange}/>
}


export default TextArea;