import { Inner, Word } from "./styles/wordGrid";
export default function WordGrid({ words }) {
  return (
    <Inner>
      {words.map((word, index) => (
        <Word key={index}>{word} </Word>
      ))}
    </Inner>
  );
}
