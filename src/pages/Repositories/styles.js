import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-heiht: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.gray950};
  min-width: 280px;
  overflow-y: hidden;
  padding-bottom: 5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-bottom: 2rem;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
