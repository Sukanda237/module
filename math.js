//menggunkan anonim function
const penjumlahan = (a, b) => {
    return a + b;
}
//atau 
// const penjumlahan = (a, b) => a + b;

const PI = 3.14;

const luas = (p, l) => p * l ;
// atau const luas = (jari) => {
//     return PI * jari * jari ;
// }

const keliling = (jari) => 2 * PI * jari ;

//berfungsi untuk mengexport function untuk digunkan oleh file lain 
module.exports.penjumlahan = penjumlahan;
module.exports.PI = PI;
module.exports.luas = luas;
module.exports.keliling = keliling;