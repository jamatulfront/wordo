const { readSync } = require("./io");
const path = require("path");
function parseWords(words) {
  let parsedWords = [];
  let current = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "," || words[i] === " ") {
      current = current.toLowerCase();
      current && parsedWords.push(current);
      current = "";
    } else {
      current += words[i];
    }
  }
  current && parsedWords.push(current);
  return parsedWords;
}

function getDays() {
  return readSync(path.join(__dirname, "../data.json"));
}

function getOnlyWords(days) {
  let words = [];
  for (let day of days) {
    words = [...words, ...day.words];
  }
  return words;
}
module.exports = {
  parseWords,
  getDays,
  getOnlyWords,
};
