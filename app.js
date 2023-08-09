// belajar module export Javascript di node JS
//untuk memanggil file js terpisah

// const math = require('./math');
// console.log(math.penjumlahan(2, 2));
// console.log(math.luas(5, 2));
// console.log(math.keliling(7));

// cara memanggil file JS dengan metode distrak
const {penjumlahan, luas, keliling} = require('./math')

console.log(penjumlahan(2, 2));
console.log(luas(5, 2));
console.log(keliling(7));

const cats = require('./cats');

console.log(cats);

// ini adalah project kelas XII RPL 3


// ini deskripsi dari leptop macbook 