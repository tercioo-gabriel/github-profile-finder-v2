import styled from "styled-components";

export const Container = styled.div`
  display: grid
  grid-template-columns: auto auto;
  margin: 1rem auto;
  padding-right: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.gray100};
  width: 100%;
  min-height: 2rem;
  margin-bottom: 2px;
  gap: 1rem;
  border: none;
  border-radius: 0 20px 20px 0;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover, &.selected{
    background: ${(props) => props.color || props.theme.colors.redPink};
    color: ${(props) => props.theme.colors.gray100};
    transform: translateX(5px) scale(1.04);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    border-radius: 20px;

    &:hover, &.selected{
      transform: translateX(0) scale(1.02);
    }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.gray200};
  background: ${(props) => props.theme.colors.container};
  border: none;
  border-radius: 0 20px 20px 0;
  text-align: center;
  margin-top: 10px;
  padding: .4rem 1rem;
  opacity: 0.95;
  transition: 0.2s;

  &:hover{
    color:  ${(props) => props.theme.colors.redPink};
    transform: scale(1.08);
    opacity: 1;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    text-align: center;
    border-radius: 20px;
    margin-top: 5px;
  }
`;
