import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray950};
  border-left: 3px solid ${(props) => props.color || props.theme.colors.metalDark};
  padding: 1rem;
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.gray200};
  font-weight: normal;
  margin: .5rem 0;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 1.25;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color || props.theme.colors.metalDark};
  font-size: ${(props) => props.theme.fontSize.base};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;