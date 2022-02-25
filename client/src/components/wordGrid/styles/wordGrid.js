import styled from "styled-components";

export const Inner = styled.div`
  width: 76%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const Word = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 18px;
  &::after {
    content: " , ";
  }
  margin-right: 3px;
`;
