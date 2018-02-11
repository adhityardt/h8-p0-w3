function pasanganTerbesar(num) {
  let numArray = String(num).split('');
  let arrayKosong = [];
  let hasil = 0;
  let display = 0;
  for (var i = 0; i < numArray.length; i++) {
    arrayKosong.push(Number(numArray[i]));
  }
  let puluhan = Math.max(...arrayKosong.slice(0, arrayKosong.length - 1));
  let satuan = 0;
  for (var j = 0; j < numArray.length; j++) {
    if (arrayKosong[j] == puluhan) {
      if (arrayKosong[j-1] == puluhan) {
        puluhan = arrayKosong[j-1];
        satuan = Math.max(...arrayKosong.slice(0, arrayKosong.length - 1));
      } else {
        satuan = arrayKosong[j+1];
      }
    }
  }
  hasil = `${puluhan}${satuan}`;
  return display = Number(hasil);
}
