import React, {useState} from "react";
import styled from "styled-components";

import Button from "../ui/Button";
import TextInput from '../ui/TextInput'
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

const WriteArea = styled.div`
    display:flex;
    flex-direction: column;
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

function PostWritePage(props) {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const navigate = useNavigate();

    return (

        <Wrapper>
            <Container>
                <Header></Header>
                <Title title="글쓰기"></Title>

                <WriteArea>
                    <InputWrap>
                        <TextInputTitle>제목</TextInputTitle>
                        <TextInput width="calc(100% - 100px)" borderRadius="8px" placeholder="제목을 입력하세요" height="48px" value={title} onChange={(e) => setTitle(e.target.value)}></TextInput>
                    </InputWrap>

                    <InputWrapAIFS>
                        <TextInputTitle>내용</TextInputTitle>
                        <TextInput width="calc(100% - 100px)" borderRadius="8px" placeholder="내용을 입력하세요" height="300px" value={content} onChange={(e) => setContent(e.target.value)}></TextInput>
                    </InputWrapAIFS>
                    
                    <Button title="글 작성하기"
                            width="fit-content"
                            backColor="var(--main-color)"
                            borderColor="var(--main-color)"
                            textC="white"
                            ml="auto"

                    onClick={function() {
                        let timestamp = new Date().getTime().toString();
                        db.collection('post').doc(timestamp).set({
                            id: timestamp,
                            title: title,
                            content: content,
                            commnents: []
                        }).then(function() {
                            navigate('/')
                        })
                    }}></Button>
                </WriteArea>
                
            </Container>
        </Wrapper>

    )
}

export default PostWritePage;