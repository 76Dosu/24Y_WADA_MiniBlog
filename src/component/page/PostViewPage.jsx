import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import Header from "../ui/Header";
import Title from "../ui/Title";

// import data from '../../data.json'
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
    display:flex;
    flex-direction: column;
`

const PostContainer = styled.div`
    padding:36px 0px 60px 0px;
    border-bottom:1px solid #666;
`

const ContentText = styled.p`
    font-size:16px;
    line-height:1.4;
    color:var(--post-textColor);
`

const CommentFrame = styled.div`
    display:flex;
    height:48px;
`

const CommentLabel = styled.p`
    font-size: 24px;
    font-weight: 400;
    color:var(--main-textColor);
    margin-bottom:24px;
`

const DivideLine = styled.hr`
    color:var(--main-textColor);
    height:2px;
    border:1px solid var(--main-textColor);
    margin:24px 0;
`

function PostViewPage(props) {

    const navigate = useNavigate();
    const postId = useParams().id;

    // const post = data.find((item) => {
    //     return item.id == postId;
    // })

    const [comment, setComment] = useState('');

    const [post, setPost] = useState({
        id : "",
        title : "",
        content : "",
        comments : [],
    })

    useEffect(function() {
        db.collection('post').doc(postId).get().then(function(doc) {
            setPost(doc.data())
        })     
    });
    
    //button width
    // const buttonRef = useRef(null);
    // const [buttonWidth, setButtonWidth] = useState(null);

    // useEffect(() => {
    //     if (buttonRef.current) {
    //       const width = buttonRef.current.offsetWidth;
    //       setButtonWidth(width);
    //     }
    //   }, [buttonWidth]);

    return (
        <Wrapper>
            <Container>
                <Header></Header>
                
                <Title title={post.title}></Title>
                <DivideLine></DivideLine>

                <PostContainer>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <Button width="fit-content" 
                        title="뒤로 가기"
                        backColor="white"
                        borderColor="var(--main-color)"
                        textC="var(--main-color)"
                        ml="auto"
                        mt="24px"
                        mb="24px"
                        onClick={() => {navigate('/')}}></Button>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments}></CommentList>

                <CommentFrame>
                    <TextInput borderRadius="80px" placeholder="댓글을 입력하세요" width="calc(90% - 24px)" value={comment} onChange={(e) => setComment(e.target.value)}></TextInput>
                    <Button title="작성하기"
                            width="fit-content"
                            height="100%"
                            backColor="var(--main-color)"
                            borderColor="var(--main-color)"
                            textC="white"
                            ml="auto"

                            // ref={buttonRef}

                        onClick={function() {
                        let timestamp = new Date().getTime().toString();
                        let tempComments = post.comments;

                        tempComments.push({
                            id: (postId + '_' + timestamp),
                            content:comment
                        })       
                        
                        db.collection('post').doc(postId).update({
                            comments: tempComments
                        }).then(function() {
                            setComment('')
                        })
                    }}></Button>
                </CommentFrame>
                
            </Container>
        </Wrapper>
    )

}

export default PostViewPage;