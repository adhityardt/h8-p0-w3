function mengelompokkanAngka(arr){
  let arrayKosong = [[],[],[]];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0 && arr[i]%3 !== 0) {
      arrayKosong[0].push(arr[i]);
    }
    if (arr[i]%2 !== 0 && arr[i]%3 !== 0) {
      arrayKosong[1].push(arr[i]);
    }
    if (arr[i]%3 === 0) {
      arrayKosong[2].push(arr[i]);
    }
  }
  return arrayKosong;
}
 
