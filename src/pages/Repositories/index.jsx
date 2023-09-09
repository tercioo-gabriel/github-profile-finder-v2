import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repos from "./Repos";

import { Container, Sidebar, Main } from "./styles";

import { getLangsFrom } from "../../services/api";

export default function RepositoriesPage() {

  const user = {
    login: "tercioo-gabriel",
    avatar_url: "https://avatars.githubusercontent.com/u/115636997?v=4",
    name: "Tércio Gabriel",
    followers: 40,
    following: 67,
    company: null,
    blog: "https://master--tercioo-gabriel.netlify.app",
    location: "Várzea Nova - BA",
  };

  const repositories = [
    {
      name: 'Repo 1',
      description: 'descrição aleatoria kk',
      html_url: 'https://master--tercioo-gabriel.netlify.app',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'descrição aleatoria kk',
      html_url: 'https://master--tercioo-gabriel.netlify.app',
      language: 'Kotlin',
    },
    {
      name: 'Repo 3',
      description: 'descrição aleatoria kk',
      html_url: 'https://master--tercioo-gabriel.netlify.app',
      language: 'TypeScript',
    },
    {
      name: 'Repo 4',
      description: 'descrição aleatoria kk',
      html_url: 'https://master--tercioo-gabriel.netlify.app',
      language: 'Kotlin',
    },
  ];

  const languages = getLangsFrom(repositories);

  return(
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repos />
      </Main>
    </Container>
  );
}