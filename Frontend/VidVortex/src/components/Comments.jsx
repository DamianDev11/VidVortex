import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
const Comments = () => {
  return (
    <Container>
    <NewComment>
    <Avatar src='https://media.istockphoto.com/id/1168187764/photo/serious-male-entrepreneur-sitting-at-desktop-with-laptop-computer-checking-documentation.jpg?s=2048x2048&w=is&k=20&c=3wVaj-ooG8UTp7--JYFZ2DU1GcKxIKRGGP-9PD2doU8='/>
    <Input placeholder='Add a comment...'/>
    </NewComment>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>

    </Container>
  )
}

export default Comments