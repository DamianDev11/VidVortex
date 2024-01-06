import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    gap:10px;
    margin:30px 0px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    color:${({theme})=>theme.text};
`;

const Name = styled.span`
    font-size:13px;
    font-weight:500;
`;
const Date = styled.span`
font-size:13px;
font-weight:500;
color:${({theme})=>theme.textSoft};
margin-left:5px;
`;
const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
    <Avatar src='https://media.istockphoto.com/id/1168187764/photo/serious-male-entrepreneur-sitting-at-desktop-with-laptop-computer-checking-documentation.jpg?s=2048x2048&w=is&k=20&c=3wVaj-ooG8UTp7--JYFZ2DU1GcKxIKRGGP-9PD2doU8='/>
    <Details>
        <Name>Dam<Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore soluta aut debitis voluptate eveniet distinctio nobis ad praesentium corporis.</Text>
    </Details>
    </Container>
  )
}

export default Comment