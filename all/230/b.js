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

// [memo]かかった時間:9:01
// 別解としてString.indexOf(searchStr)が>=0のときってやるのがオブジェクト指向的な書き方

// 以降処理記載
const oxx = "oxx";
const t = oxx.repeat(Math.pow(10, 5));

const s = input[0];

// for (let i = 0; i < t.length; i++) {
//   if (t.slice(i, i + s.length) == s) {
//     console.log("Yes");
//     return;
//   }
// }
// console.log("No");

t.indexOf(s) >= 0 ? console.log("Yes") : console.log("No");
