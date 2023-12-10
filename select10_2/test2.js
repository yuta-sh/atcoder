// ローカルは下記で実行
// -------------------------------------------------------------
const input = require("fs")
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n");

const array = input[0].split("").map(Number);

const sum = array.reduce((acc, cur) => {
  return acc + parseInt(cur);
}, 0);

console.log(sum);

// 本番は下記で提出
// -------------------------------------------------------------
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// -------------------------------------------------------------

// [memo]かかった時間:

// 以降処理記載
