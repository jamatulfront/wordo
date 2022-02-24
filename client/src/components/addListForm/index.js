import { useState } from "react";

export default function AddListForm({ children }) {
  let [words, setWords] = useState("");
  const onChange = (e) => {
    setWords(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(words));

    fetch("http://localhost:8000/words", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ words }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={words}
        onChange={onChange}
        placeholder={` Word should be ended by , or space . An example is "apple,salmon" or "apple salmon" both are valid`}
      ></textarea>
      <button>Save</button>
    </form>
  );
}
