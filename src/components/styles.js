import styled from "styled-components";

export const Back = styled.button`
  margin: 20px 0 0 20px;
  padding: 5px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.gray100};
`;

export const Error = styled.p`
  color: ${(props) => props.theme.colors.gray100};
`;