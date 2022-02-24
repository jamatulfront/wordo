import styled from "styled-components";

export const Container = styled.div`
  width: 76%;
  margin: auto;
`;
export const Inner = styled.div``;
export const Frame = styled.div``;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const Pan = styled.div``;
export const Card = styled.div`
  padding: 20px 65px;
  width: 220px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #171717;
  background: ${({ color }) => color};
`;
export const Heading = styled.h1`
  font-size: 24px;
  color: #282828;
  position: relative;
  &::after {
    content: "";
    width: 18px;
    height: 18px;
    position: absolute;
    background: ${({ success }) => (success ? "#39d68a" : "#EF6868")};
    border-radius: 50%;
    top: 9px;
    left: 80px;
  }
`;
export const Item = styled.li`
  margin: 5px 0;
  text-transform: uppercase;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
