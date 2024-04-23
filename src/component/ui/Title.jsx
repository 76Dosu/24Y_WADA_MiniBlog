import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    margin:0 auto;
    display:flex;
    align-content:center;
    justify-content: space-between;
`

const TitleText = styled.p`
    font-size: 40px;
    font-weight: bold;
    color:var(--main-textColor);
`

const DivideLine = styled.hr`
    color:var(--main-textColor);
    height:2px;
    border:1px solid var(--main-textColor);
`

function Title(props) {
    
    const { title } = props;

    return (

        <Wrapper>
            <TitleText>{title}</TitleText>
            <DivideLine></DivideLine>
        </Wrapper>

    )

}

export default Title;