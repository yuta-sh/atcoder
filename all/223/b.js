// ローカルは下記で実行
// -------------------------------------------------------------
// const input = require("fs")
//   .readFileSync("./input.txt", "utf8")
//   .trim()
//   .split("\n");

// 本番は下記で提出
// -------------------------------------------------------------
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// -------------------------------------------------------------

// [memo]かかった時間:17:10
// acはしたが、sortの比較の仕方を忘れている。辞書順のやり方がたまたま文字列としての比較で、辞書順昇順デフォだった。

// 以降処理記載
const s = input[0];

const leftShift = (str, times) => {
  if (times === 0) return str;
  return str.slice(times) + str.slice(0, times);
};

const shifted = [];
for (let i = 0; i < s.length; i++) {
  shifted.push(leftShift(s, i));
}
// console.log(shifted);
const sorted = shifted.sort();

console.log(sorted[0]);
console.log(sorted[s.length - 1]);
