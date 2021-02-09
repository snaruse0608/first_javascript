/**
 * node code/03_data/06-2/main.js
 * 数値リテラルの挙動を確認する
 */
/* 整数リテラル */
const count = 10;
console.log(count); // 10

/* 16進数 */
const blue = 0x0000ff;
console.log(blue); // 255

/* 8進数 */
const umask = 0o0022;
console.log(umask); // 18

/* 小数 */
const roomTemp = 21.5;
console.log(roomTemp); // 21.5

/* 指数表記 */
const c = 3.0e6;
console.log(c); // 3000000
const e = -1.6e-19;
console.log(e); // -1.6e-19

/* Infinity */
console.log(Infinity); // Infinity
const nInf = -Infinity;
console.log(nInf); // -Infinity

/* Not A Number */
console.log(NaN); // NaN
