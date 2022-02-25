import { Hamburger, Header } from "../components";
import DayContainer from "../containers/day";
import logo from "../assets/Logo-w.png";

export default function Home() {
  return (
    <>
      <Hamburger />
      <Header>
        <Header.Logo src={logo} />
      </Header>
      <DayContainer />
    </>
  );
}
