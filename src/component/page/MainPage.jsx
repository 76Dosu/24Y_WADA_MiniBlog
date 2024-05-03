import React, {useState, useEffect} from "react";
import styled from "styled-components";

// ui import
import PostList from "../list/PostList";
import FCButton from "../ui/FCButton";
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

const ContentsHead = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
`

const Filter = styled.div`
    display:flex;
`

const CategoryF = styled.select`
    width:fit-content;
    height:48px;
    padding: 12px 16px;
    margin-right:12px;
    border-radius: 50px;
    border:1px solid #CDCDCD;

    font-size: 16px;
    font-weight: 400;
    line-height:22px;
    color:var(--main-textColor);
`

const TimeF = styled.select`
    width:fit-content;
    height: 48px;
    padding: 12px 16px;
    border-radius: 50px;
    border:1px solid #CDCDCD;

    font-size: 16px;
    font-weight: 400;
    line-height:22px;
    color:var(--main-textColor);
`

const DivideLine = styled.hr`
    color:var(--main-textColor);
    height:2px;
    border:1px solid var(--main-textColor);
    margin:24px 0;
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

            <ContentsHead>
                <Title title="쉽고 간편하게<br><span style='color:white; background-color:var(--main-color);'>일상을 기록</span> 해보세요"></Title>
                <Filter>
                    <CategoryF>
                        <option>전체</option>
                        <option>리액트</option>
                        <option>자바스크립트</option>
                        <option>파이썬</option>
                        <option>C언어</option>
                    </CategoryF>
                    <TimeF>
                        <option>업로드순</option>
                        <option>업데이트순</option>
                    </TimeF>
                </Filter>
            </ContentsHead>
            
            <DivideLine></DivideLine>
              
            <Container>
                <PostList posts={data} onClickItem={(p) => {navigate('/post/' + p.id)}}></PostList>
                <FCButton title="글쓰기"
                onClick={() => {navigate('/write')}}></FCButton>
            </Container>
        </Wrapper>
    )

}

export default MainPage;