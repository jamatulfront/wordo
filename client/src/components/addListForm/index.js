import { useState } from "react";
import {
  Inner,
  Form,
  Input,
  Button,
  Content,
  Heading,
  Image,
  Text,
  IconButton,
} from "./styles/addListForm";
import img from "../../assets/Ok.png";
import add from "../../assets/add.png";
import reset from "../../assets/Reset.png";
import { Link } from "react-router-dom";

export default function AddListForm({ children }) {
  const [words, setWords] = useState("");
  let [result, setResult] = useState(null);
  const onChange = (e) => {
    setWords(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!words) {
      alert("Please Add Something !");
      return;
    }
    fetch("http://localhost:8000/words", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ words }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data));
  };
  return (
    <Inner>
      {!result && (
        <Form onSubmit={onSubmit}>
          <Input
            value={words}
            onChange={onChange}
            placeholder={`Word should be ended by , or space . An example is "apple,salmon" or "apple salmon" both are valid`}
          ></Input>
          <Button>
            <img src={add} />
            Add
          </Button>
        </Form>
      )}
      {result && result.taken && (
        <Content>
          <Heading>Congratulation</Heading>
          <Image src={img} />
          <Text color="green">
            We have Added {result.taken} words in your Day.
          </Text>
          <Text style={{ marginTop: 10, marginBottom: 40 }}>
            {result.found.map((item, index) => {
              return (
                <span key={index}>
                  {item}
                  {","}
                </span>
              );
            })}{" "}
            {result.found.length === 0 && "There is no "}
            words are duplicates or exists in your previous day.
          </Text>
          <Link style={{ color: "gray" }} to="/">
            Go to the Words
          </Link>
        </Content>
      )}
      {result && result.msg && (
        <Content>
          <Text color="red">{result.msg}</Text>
          <IconButton onClick={() => setResult(null)} src={reset} />
        </Content>
      )}
    </Inner>
  );
}
