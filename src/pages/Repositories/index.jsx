import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";

import { Container, Sidebar, Main } from "./styles";

export default function RepositoriesPage() {
  return(
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        Main
      </Main>
    </Container>
  );
}