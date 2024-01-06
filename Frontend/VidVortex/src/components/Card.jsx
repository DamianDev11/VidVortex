import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props)=>props.type === "sm" && "360px"};
  margin-bottom:${(props)=>props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display:${(props)=>props.type === "sm" && "flex"};
  gap:10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props)=>props.type === "sm" ? "120px":"202px"};
  background-color: #999;
  flex:1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type !== "sm" && "16px"};
  gap: 12px;
  flex:1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display:${(props)=>props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src="https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Details type={type}>
          <ChannelImage type={type} src="https://media.istockphoto.com/id/1168187764/photo/serious-male-entrepreneur-sitting-at-desktop-with-laptop-computer-checking-documentation.jpg?s=2048x2048&w=is&k=20&c=3wVaj-ooG8UTp7--JYFZ2DU1GcKxIKRGGP-9PD2doU8=" />
          <Texts>
            <Title>Dam1 videos</Title>
            <ChannelName>Dam1</ChannelName>
            <Info>100,000 views | 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
