function perkalianUnik(arr) {
  let arrHasil = [];
  for (var i = 0; i < arr.length; i++) {
    let arr2 = arr.slice();
    let total = 1;
    arr2.splice(i,1);
    for (var j = 0; j < arr2.length; j++) {
      total *= arr2[j]
    }
    arrHasil.push(total);
  }
  return arrHasil;
}
