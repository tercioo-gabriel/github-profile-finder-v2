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
  margin: 1rem auto;
  border-radius: 50%;
  width: 70%;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 25%;
  }  

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 110px;
    height: 110px;
    margin: 0 auto;
  }  
`;

export const Login = styled.h1`
  font-size: 25px;
  margin-top: 5px;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: normal;
  line-height: 0.01;
  margin-top: 0;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: flex-start;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xsm}) {
    display: none;
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