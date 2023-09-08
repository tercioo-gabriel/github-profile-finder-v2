import styled from "styled-components";

export const Container = styled.div`
  display: grid
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
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
  margin-bottom: 1px;
  gap: 1rem;
  border: none;
  border-radius: 0 20px 20px 0;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover, &.selected{
    background: ${(props) => props.color || props.theme.colors.redPink};
    transform: translateX(5px) scale(1.02);
  }

  &:hover{ 
    color: ${(props) => props.theme.colors.gray100};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    border-radius: 20px;

    &:hover, &.selected{
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.gray100};
  background: ${(props) => props.theme.colors.container};
  border: none;
  border-radius: 30px;
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
`;
