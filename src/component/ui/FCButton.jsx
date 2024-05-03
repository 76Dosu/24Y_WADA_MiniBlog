import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    width:fit-content;
    height:${props => props.height};

    padding: 12px 16px;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    float:right;
    
    background-color: var(--main-color);
    border:1px solid var(--main-color);
    border-radius:50px;

    color:white;
    font-size: 18px;
    font-weight: bold;
    transition:.3s;

    cursor:pointer;

    &:hover {
        background-color: white;
        color:var(--main-color);
    }
`

function FC_Button(props) {

    const { mt, mb, width, height, title, onClick } = props;

    return (
        <StyledButton width={width}
                      height={height}
                      mt={mt}
                      mb={mb}
                      onClick={onClick}>{title || "글 쓰기"}</StyledButton>
    )
}

export default FC_Button;