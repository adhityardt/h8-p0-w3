function hitungJumlahKata(kalimat) {
  let jumlahSpasi = kalimat.split(' ').length;
  return jumlahSpasi;
}

console.log(hitungJumlahKata('Makan Ayam'));
