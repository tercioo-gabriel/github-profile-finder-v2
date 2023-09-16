import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.container};
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.redPink};
  text-shadow: .75px .75px .9px rgba(256, 256, 256, 0.5);
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.redPink};
  width: 100%;
  height: 65px;
  line-height: 64px;
  border: none;
  outline: 0;
  border-radius: 7px;
  font-size: 24px;
  margin-right: 12px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.gray100};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  &::placeholder {
    color: ${(props) => props.theme.colors.container};
    font-size: 18px;
    opacity: 0.85;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.redPink};
  width: 80px;
  height: 64px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.container};
  transition: 0.2s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.colors.gray100};
  }
`;