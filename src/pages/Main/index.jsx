import React from "react";

import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/images/GitHub.png"

export default function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="GitHub" />
      <Title>GitHub Finder App</Title>
      <Form>
        <Input placeholder="Usuário..." />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
