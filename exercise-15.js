function groupAnimals(animals){
  var arrHasil = [];
  animals.sort(function(a, b){return a[0] > b[0]});//['ayam']
  var Indeks0 = 0;
  for (var i = 0; i < animals.length; i++){
    if (arrHasil === undefined || arrHasil.length === 0 ){
      arrHasil.push([animals[i]]);
    }else if(arrHasil[Indeks0][0][0] === animals[i][0]) {
      arrHasil[Indeks0].push(animals[i]);
    }else{
      arrHasil.push([animals[i]]);
      Indeks0++;
    }
  }
  return arrHasil;
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
