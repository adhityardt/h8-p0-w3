let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  let split = input[3].split('/');
  let bulan = '';
  switch (split[1]) {
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Maret';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;
    default:
      bulan = 'Bulan tidak ditemukan';
      break;
  }
  let sorting = split.slice().sort(function(value1, value2) { return Number(value1) < Number(value2)});
  let join = split.join('-');
  let splitNama = input[1].split('');
  let limaBelasKarakter = splitNama.splice(0, 15);
  console.log(input);
  console.log(bulan);
  console.log(sorting);
  console.log(join);
  console.log(limaBelasKarakter.join(''));
  return;
}
dataHandling2(input);
