import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 25px;
  right: 180px;
`;
export const Logo = styled.img`
  cursor: pointer;
  height: 50px;
`;
export const Content = styled(motion.div)`
  height: 90px;
  width: 76vw;
  margin: auto;
  background: #39d68a;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.img`
  height: 20px;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
`;
export const Item = styled.li``;
export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 30px;
    margin-right: 10px;
  }
`;
