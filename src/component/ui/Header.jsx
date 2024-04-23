import React from "react";
import styled from 'styled-components'
import Button from "./Button";

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
`

const HeaderLogo = styled.p`
    font-family: "Cherry Bomb One";
    font-size: 32px;
    margin:24px 0px;
    float:left;
`
const Gnb = styled.div`
    display:flex;
    align-items:center;
    margin-left:auto;
`

const GnbList = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-right:40px;
    color:var(--main-textColor);
    cursor:pointer;
`

function Header(props) {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <HeaderLogo>miniblog</HeaderLogo>
            <Gnb>
                <GnbList>커뮤니티</GnbList>
                <GnbList>마이페이지</GnbList>
            </Gnb>
            <Button title="글 작성하기" onClick={() => {navigate('/write')}}></Button>
        </Wrapper>
    )
}

export default Header;