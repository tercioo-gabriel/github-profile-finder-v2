import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-items: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 25%;
  }  

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 110px;
    height: 110px;
    margin-right: 1rem;
    margin-bottom: 0;
  }  
`;

export const Login = styled.h1`
  font-size: 25px;
`;

export const LoginInfo = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 0.01;
`;

export const Inner = styled.div`
  padding: ;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: flex-start;
  }  
`;

export const Data = styled.p`
  display: flex;
  line-height: 1.25;
  margin: 0;

  svg{
    margin-right: 10px;
    
  }
`;