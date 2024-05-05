import React, {useState} from "react";
import styled from "styled-components";

import FCButton from "../ui/FCButton";
import TextInput from '../ui/TextInput'
import SelectInput from "../ui/SelectInput";

import { useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import Title from "../ui/Title";

import { db } from '../../firebase'

const Wrapper = styled.div`
    width:76.92%;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width:100%;
`

const DivideLine = styled.hr`
    color:var(--main-textColor);
    height:2px;
    border:1px solid var(--main-textColor);
    margin:24px 0;
`

const WriteArea = styled.div`
    width: 100%;
`

const InputWrap = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:24px;
`

const InputWrapAIFS = styled(InputWrap)`
    align-items: flex-start;
`

const TextInputTitle = styled.p`
    font-size:24px;
    font-weight:400px;
    color:var(--main-textColor);
    width:100px;
`

const FCButtonLeft = styled(FCButton)`
    margin-left:auto !important;
`

function PostWritePage(props) {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [option, setOption] = useState('리액트')

    const navigate = useNavigate();

    return (

        <Wrapper>
            <Container>
                <Header></Header>
                <Title title="글쓰기"></Title>
                <DivideLine></DivideLine>

                <WriteArea>
                    <InputWrap>
                        <TextInputTitle>분류</TextInputTitle>
                        <SelectInput width="20%" borderRadius="8px" placeholder="제목을 입력하세요" height="48px" value={option} onChange={(e) => setOption(e.target.value)}></SelectInput>
                    </InputWrap>

                    <InputWrap>
                        <TextInputTitle>제목</TextInputTitle>
                        <TextInput width="calc(100% - 100px)" borderRadius="8px" placeholder="제목을 입력하세요" height="48px" value={title} onChange={(e) => setTitle(e.target.value)}></TextInput>
                    </InputWrap>

                    <InputWrapAIFS>
                        <TextInputTitle>내용</TextInputTitle>
                        <TextInput width="calc(100% - 100px)" borderRadius="8px" placeholder="내용을 입력하세요" height="300px" value={content} onChange={(e) => setContent(e.target.value)}></TextInput>
                    </InputWrapAIFS>
                    
                    <FCButtonLeft title="글 작성하기"

                    onClick={function() {
                        let timestamp = new Date().getTime().toString();

                        let year = new Date().getFullYear().toString();
                        let month = new Date().getMonth();
                        let displayMonth = (month + 1).toString();

                        let day = new Date().getDate().toString();
                        let myTime = `${year}.${displayMonth}.${day}`

                        db.collection('post').doc(timestamp).set({
                            id: timestamp,
                            time : myTime,
                            title: title,
                            content: content,
                            comments: [],
                            option:option
                        }).then(function() {
                            navigate('/')
                        })
                    }}></FCButtonLeft>
                </WriteArea>
                
            </Container>
        </Wrapper>

    )
}

export default PostWritePage;