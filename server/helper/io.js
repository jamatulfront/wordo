const fs = require("fs");
const path = require("path");
function save(data) {
  fs.writeFile(path.join(__dirname, "../data.json"), data, (err) => {
    if (err) return err;
    else console.log("Saved successfully");
  });
}
async function read(callback) {
  fs.readFile(path.join(__dirname, "../data.json"), "utf-8", (err, data) => {
    if (err) return err;
    else callback(data);
  });
}
function readSync(path) {
  return fs.readFileSync(path, "utf-8");
}

module.exports = {
  save,
  readSync,
};
