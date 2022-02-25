export function divideInChunk(array, size) {
  let chunkedArray = [];
  let p = 0;
  let innerArray = [];
  for (let item of array) {
    innerArray.push(item);
    p++;
    if (p === size) {
      chunkedArray.push(innerArray);
      innerArray = [];
      p = 0;
    }
  }
  if (!innerArray.length === 0) chunkedArray.push(innerArray);
  return chunkedArray;
}
