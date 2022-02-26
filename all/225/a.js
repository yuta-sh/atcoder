// ローカルは下記で実行
// -------------------------------------------------------------
const input = require("fs")
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n");

// 本番は下記で提出
// -------------------------------------------------------------
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// -------------------------------------------------------------

// [memo]かかった時間:3:26

// 以降処理記載
const set = new Set(input[0].split(""));

if (set.size === 1) console.log(1);
if (set.size === 2) console.log(3);
if (set.size === 3) console.log(6);
