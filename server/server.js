const express = require("express");
const cors = require("cors");
const { getDays, getOnlyWords, parseWords } = require("./helper/words");
const { removedDuplicates } = require("./helper/general");
const { save } = require("./helper/io");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  let days = getDays();
  if (days.length === 0) {
    return res.json({ msg: "No day is found!" });
  }
  return res.json({ days });
});

app.get("/words", (req, res) => {
  let days = getDays();
  let totalWords = getOnlyWords(JSON.parse(days));
  if (totalWords.length === 0) {
    return res.json({ msg: "No word is found!" });
  }
  return res.json({ words: totalWords });
});

app.post("/words", (req, res) => {
  let days = getDays();
  days = days ? JSON.parse(days) : [];
  if (!days) return res.statusCode(500).json({ msg: "Server Down" });
  let entry = {};
  entry.day = days.length > 0 ? days[days.length - 1].day + 1 : 1;
  let entryWords = [];
  let totalWords = getOnlyWords(days);
  let parsedWords = parseWords(req.body.words);
  let wordsNum = parsedWords.length;
  let words = removedDuplicates(parsedWords);
  let taken = 0;
  let found = [];
  for (let word of words) {
    if (!totalWords.includes(word)) {
      taken++;
      entryWords.push(word);
    } else {
      found.push(word);
    }
  }
  if (taken === 0)
    return res
      .status(400)
      .json({ msg: "Please give at least one new word to add!" });
  entry.words = entryWords;
  days.push(entry);
  try {
    save(JSON.stringify(days));
    return res.status(200).json({ total: wordsNum, found, taken });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to saved" });
  }
});

app.listen(8000, () => {
  console.log("Server is running at port : ", 8000);
});
