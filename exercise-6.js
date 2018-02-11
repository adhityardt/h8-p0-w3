function angkaPalindrome(num) {
  let hasil = false;
  if (String(num) == String(num).split("").reverse().join("")){
    num++;
    hasil = num;
  } else {
    while (hasil === false) {
    if (String(num) == String(num).split("").reverse().join("")){
      hasil = num;
    } else {
      hasil = hasil;
    }
    num++;
  }
  }

  return hasil;
}

console.log(angkaPalindrome(101));
