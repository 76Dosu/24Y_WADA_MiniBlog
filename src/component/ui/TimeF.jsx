import React from "react";
import styled from "styled-components";

const StyledSelectArea = styled.select`
    width:${props => props.width};
    height:fit-content;
    padding: 12px 16px;
    border:1px solid #e4e4e4;
    border-radius:50px;

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

function TimeF(props) {
    
    const { borderRadius, placeholder, width, height, option, onChange} = props;

    return (
        <StyledSelectArea borderRadius={borderRadius} width={width} height={height} placeholder={placeholder} value={option} onChange={onChange}>
            <option>리액트</option>
            <option>자바스크립트</option>
            <option>파이썬</option>
            <option>C언어</option>
        </StyledSelectArea>
    )

}

export default TimeF;