import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width:${props => props.width};
    height:${props => props.height};
    padding: 12px 16px;
    border:1px solid #e4e4e4;
    border-radius:${props => props.borderRadius};

    font-size: 16px;
    font-weight: 400;
    line-height:22px;
    color:var(--main-textColor);
    resize:none;

    &::placeholder {
        font-size:16px;
        color:#888;
    }
`

function TextInput(props) {
    
    const { borderRadius, placeholder, width, height, value, onChange} = props;

    return (
        <StyledTextArea borderRadius={borderRadius} width={width} height={height} placeholder={placeholder} value={value} onChange={onChange}></StyledTextArea>
    )

}

export default TextInput;