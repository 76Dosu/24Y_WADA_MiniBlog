import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    width:fit-content;
    height:${props => props.height};

    padding: 12px 16px;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left:auto;
    
    background-color: white;
    border:1px solid var(--main-color);
    border-radius:50px;

    color:var(--main-color);
    font-size: 18px;
    font-weight: bold;
    float:right;
    transition:.3s;

    cursor:pointer;

    &:hover {
        background-color: var(--main-color);
        color:white;
    }
`

function NFC_Button(props) {

    const { mt, mb, width, height, title, float, onClick } = props;

    return (
        <StyledButton width={width}
                      height={height}
                      float={float}
                      mt={mt}
                      mb={mb}
                      onClick={onClick}>{title || "글 쓰기"}</StyledButton>
    )
}

export default NFC_Button;