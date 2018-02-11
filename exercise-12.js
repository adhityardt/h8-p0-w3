function tentukanDeretGeometri(arr) {
  let indexPertama = arr[0];
  let hasil = 0;
  let counter = 0;
  for (var i = 0; i < arr.length ; i++) {
    let cek = arr[i+1]/arr[i];//rasio
    let power = Math.pow(cek, i);
    if (arr[i]/power === arr[0]) {
      counter++
    }
  }
  if(counter == arr.length-1){
    hasil = true;
  } else {
    hasil = false;
  }
  return hasil;
}
