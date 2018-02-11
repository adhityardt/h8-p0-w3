let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];




function dataHandling(input) {
  let banyakArray = input.length - 1;
  let arrayInt = 0;
  while (banyakArray >= 0) {
    console.log(`Nomor ID: ${input[arrayInt][0]}`);
    console.log(`Nama Lengkap: ${input[arrayInt][1]}`);
    console.log(`TTL: ${input[arrayInt][2]} ${input[arrayInt][3]}`);
    console.log(`Hobi: ${input[arrayInt][4]}`);
    banyakArray --;
    arrayInt ++;
  }
}

dataHandling(input);
