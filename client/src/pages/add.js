import { AddListForm, Hamburger, Header } from "../components";
import logo from "../assets/Logo-w.png";
export default function Add() {
  return (
    <>
      <Hamburger />
      <Header>
        <Header.Logo src={logo} />
      </Header>
      <AddListForm />
    </>
  );
}
