import styled from "styled-components";

export const Inner = styled.div`
  width: 76%;
  margin: auto;
`;
export const Form = styled.form`
  width: 60%;
  margin: auto;
  position: relative;
`;
export const Input = styled.textarea`
  height: 300px;
  width: 100%;
  font-style: inherit;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid gray;
  transition: all 0.3s ease;
  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
    border: 2px solid #39d68a;
  }
`;
export const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: -40px;
  border: none;
  font-size: 16px;
  background: #39d68a;
  padding: 8px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #2eae70;
  }
  img {
    height: 15px;
    margin-right: 5px;
  }
`;
export const Content = styled.div`
  text-align: center;
  margin-top: 50px;
`;
export const Heading = styled.h1`
  font-size: 36px;
  color: #1e1e1e;
  margin: 10px 0;
`;
export const Image = styled.img`
  height: 80px;
`;
export const Text = styled.p`
  font-size: 18px;
  width: 40%;
  margin: 5px auto;
  color: ${({ color }) => (color === "green" ? " #2eae70" : "#EF6868")};
  span {
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
export const IconButton = styled.img`
  width: 50px;
  cursor: pointer;
`;
