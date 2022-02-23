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

// [memo]かかった時間:4:00
// Math.roundを知らなかったから調べただけ。
// jsのroundは負の数であっても小数部が0.5だったときに正の方向に大きい数に繰り上がるらしく、これが他の言語とは違うらしい。
// 一応文字列処理でも実装しておくか。
// 文字列処理の場合はindexOfを使うことである文字の位置を取得できる
// 配列処理の場合もindexOfがある。

// 以降処理記載
const dotPosition = input[0].indexOf(".");
let intVal = Number(input[0].slice(0, dotPosition));

if (Number(input[0].slice(-3, -2)) >= 5) {
  intVal++;
}

console.log(intVal);
