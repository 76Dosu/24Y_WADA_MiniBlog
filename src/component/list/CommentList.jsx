import React from "react";
import styled from "styled-components";
import CommentItem from "../page/CommentItem";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`

function CommentList(props) {
    
    const { comments, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            {comments && comments.map((comment, index) => {

                return (
                    <CommentItem key={comment.id} comment={comment}></CommentItem>
                )

            })}
        </Wrapper>
    )

}

export default CommentList;