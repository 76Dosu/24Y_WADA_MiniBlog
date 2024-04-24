import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    width:${props => props.width};
    padding: 12px 16px;
    height:${props => props.height};
    margin-left: ${props => props.ml};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.backColor};
    border:1px solid ${props => props.borderColor};
    border-radius:50px;

    color:${props => props.textC};
    font-size: 18px;
    font-weight: bold;
    float:right;

    cursor:pointer;
`

function Button(props) {

    const { mt, mb, mr, ml, backColor, borderColor, textC, width, height, title, float, onClick } = props;

    return (
        <StyledButton width={width}
                      height={height}
                      backColor={backColor}
                      borderColor={borderColor}
                      textC={textC}
                      float={float}
                      ml={ml}
                      mr={mr}
                      mt={mt}
                      mb={mb}
                      onClick={onClick}>{title || "글 쓰기"}</StyledButton>
    )
}

export default Button;