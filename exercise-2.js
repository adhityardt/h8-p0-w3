function balikString(input) {
  let lengthInput = input.length - 1;
  let row = '';
  while (lengthInput >= 0) {
    row += input[lengthInput];
    lengthInput -- ;
  }
  console.log(row);
}
