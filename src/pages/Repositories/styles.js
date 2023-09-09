import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.white};
  min-width: 10rem;
  overflow-y: hidden;
  padding-bottom: 5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-bottom: 2rem;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.gray200};
  width: 100%;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
