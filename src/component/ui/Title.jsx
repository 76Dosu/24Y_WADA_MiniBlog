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

const DivideLine = styled.hr`
    color:var(--main-textColor);
    height:2px;
    border:1px solid var(--main-textColor);
    margin:24px 0;
`

function Title(props) {
    
    const { title } = props;

    return (

        <Wrapper>
            <TitleText><div dangerouslySetInnerHTML={{ __html: title }} /></TitleText>
            <DivideLine></DivideLine>
        </Wrapper>

    )

}

export default Title;