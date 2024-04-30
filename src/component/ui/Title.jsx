import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    margin:76px auto 0 auto;
    display:flex;
    flex-direction: column;
    align-content:center;
    justify-content: space-between;
`

const TitleText = styled.p`
    font-size: 40px;
    font-weight: bold;
    color:var(--main-textColor);
    white-space: pre-wrap;
`

function Title(props) {
    
    const { title } = props;

    return (

        <Wrapper>
            <TitleText><div dangerouslySetInnerHTML={{ __html: title }} /></TitleText>
        </Wrapper>

    )

}

export default Title;