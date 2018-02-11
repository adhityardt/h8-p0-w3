function groupAnimals(animals) {
  let arrayKosong = [];
  animals.sort();
  let counter = 0;
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] == animals[i+1][0]) {
      arrayKosong.push([animals[i], animals[i+1]]);
    }
  }
  return arrayKosong;
}
