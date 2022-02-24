import {
  Container,
  Heading,
  Pan,
  Row,
  Inner,
  Card,
  Item,
  List,
} from "./styles/day";

export default function Day({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Day.Container = function DayContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Day.Heading = function DayHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
Day.Row = function DayRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Day.Card = function DayCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
Day.Pan = function DayPan({ children, ...restProps }) {
  return <Pan {...restProps}>{children}</Pan>;
};
Day.Inner = function DayInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
Day.List = function DayList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Day.Item = function DayItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
