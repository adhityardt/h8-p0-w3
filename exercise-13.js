function targetTerdekat(arr) {
  let counter = 0;
  let i = 0;
  while (counter < 1) {
    if (arr[i] == 'o') {
      counter++;
    } else {
      i++;
    }
  }
  arr.splice(0,i);
  counter = 0;
  i = 0;
  while (counter < 1) {
    if (arr[i] == 'x') {
      counter++;
    } else {
      i++;
    }
  }
  return i;
}
