function palindrome(kata) {
  let huruf = kata.length - 1;
  let startPertama = 0;
  let batasPertama = Math.floor(kata.length/2);
  let hasil;
  while (startPertama < batasPertama) {
    if (kata[startPertama] == kata[huruf]){
      hasil = true;
    } else {
      hasil = false;
    }
    startPertama++;
    huruf--;
  }
  return hasil;
}

console.log(palindrome('kasur rusak'));
