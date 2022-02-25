import { useState } from "react";
import icon from "../../assets/menu.png";
import close from "../../assets/Close.png";
import total from "../../assets/list.png";
import insert from "../../assets/insert.png";
import memory from "../../assets/memory.png";
import {
  Logo,
  Container,
  Content,
  Icon,
  Item,
  List,
  ItemLink,
} from "./styles/hamburger";

export default function Hamburger({ children, ...restProps }) {
  let [toggle, setToggle] = useState(false);
  return (
    <Container {...restProps}>
      {!toggle && <Logo onClick={() => setToggle(true)} src={icon} />}
      {toggle && (
        <Content
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Icon onClick={() => setToggle(false)} src={close} />
          <List>
            <Item>
              <ItemLink to="/all">
                <img src={total} />
                See All Your Words
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to="/memorize">
                <img src={memory} />
                See All Memorized Words
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to="/add">
                <img src={insert} />
                Add Your Day Word List
              </ItemLink>
            </Item>
          </List>
        </Content>
      )}
    </Container>
  );
}
