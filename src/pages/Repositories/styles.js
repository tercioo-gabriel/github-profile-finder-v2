import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.gray100};
  min-width: 10rem;
  height: 100vh;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100vh;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.gray300};
  width: 100%;
  height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
