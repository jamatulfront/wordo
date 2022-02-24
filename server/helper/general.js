function removedDuplicates(array) {
  let lookup = {};
  let newArray = [];
  for (let i of array) {
    if (!lookup[i]) {
      newArray.push(i);
      lookup[i] = true;
    }
  }
  return newArray;
}

module.exports = {
  removedDuplicates,
};
