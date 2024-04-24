import React, {useState, useEffect} from "react";
import styled from "styled-components";

// ui import
import PostList from "../list/PostList";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Title from "../ui/Title";

// import data from '../../data.json'
import { db } from '../../firebase'
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width:76.92%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content: center;
`

const Container = styled.div`
    width:100%;
`

function MainPage(props) {

    const [data, setData] = useState([]);
    useEffect(function() {
        let tempData = [];

        db.collection('post').get().then(function(qs) {
            qs.forEach(function(doc) {
                tempData.push(doc.data()) // <<===== doc마다 tempData를 배열에 추가
            })

            setData(tempData);
        })
    }, [])

    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <Header></Header>

            <Title title="쉽고 간편하게<br> 세상을 기록해보세요"></Title>

            <Container>
                <PostList posts={data} onClickItem={(p) => {navigate('/post/' + p.id)}}></PostList>
                <Button float="right" title="글 쓰기" onClick={() => {navigate('/write')}}></Button>
            </Container>
        </Wrapper>
    )

}

export default MainPage;