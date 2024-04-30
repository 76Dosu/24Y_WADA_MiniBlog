import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:calc((100% - 48px) / 3 );
    min-height:155px;

    padding: 24px;
    margin-bottom: 24px;
    margin-right: 24px;

    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border:1px solid #e4e4e4;
    border-radius:8px;
    background-color:white;
    &:hover {
        border:1px solid var(--main-color);
        box-shadow: 0px 0px 8px #00000012;
    }

    cursor: pointer;

    &:nth-child(3n) {
        margin-right:0px;
    }
`

const Category = styled.p`
    font-size: 14px;
    font-weight: 400;
    color:#888;
    margin-bottom: 4px;
`   

const TitleText = styled.p`
    font-size: 24px;
    font-weight: 500;
`

const WriteTime = styled.p`
    font-size: 14px;
    font-weight:400;
    color:#888;
    margin-top:auto;
`

function PostItem(props) {
    
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <Category>{post.option}</Category>
            <TitleText>{post.title}</TitleText>

            <WriteTime>{post.time}</WriteTime>
        </Wrapper>
    )

}

export default PostItem;