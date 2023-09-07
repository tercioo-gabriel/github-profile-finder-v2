import React, { useState } from "react";

import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/images/github-pink.png"

export default function MainPage() {

  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="GitHub" />
      <Title>GitHub Profile Finder v2</Title>
      <Form>
        <Input
        placeholder="Busque um usuário..."
        value={login}
        onChange={(event) => setLogin(event.target.value)} />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
