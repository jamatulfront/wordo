import { useEffect, useState } from "react";
import { Hamburger, Header, WordGrid } from "../components";
import { URL } from "../consts/url";
import logo from "../assets/Logo-w.png";
export default function All() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(`${URL}/words`)
      .then((data) => data.json())
      .then((data) => setWords(data.words));
  }, []);
  return (
    <>
      <Hamburger />
      <Header>
        <Header.Logo src={logo} />
      </Header>
      <WordGrid words={words}></WordGrid>
    </>
  );
}
