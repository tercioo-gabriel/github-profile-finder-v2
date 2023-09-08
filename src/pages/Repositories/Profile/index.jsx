import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, LoginInfo, Inner, Data } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
        <Login>Oi Tércio Gabriel</Login>
        <LoginInfo>Vovis 293</LoginInfo>
        
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} /> 
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>

        <Data>
          <MdWork size={20} /> Dev Samurai
        </Data>

        <Data>
          <MdLocationCity size={20} />Brasil brasil
        </Data>

        <Data>
          <MdLink size={20} />
          <a href="https://www.youtube.com">youtube.com</a>
        </Data>

      </Inner>
    </Container>
  );
}