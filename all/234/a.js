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

// [memo]かかった時間:4:07

// 以降処理記載
const t = Number(input[0]);

const f = (x) => {
  return x * x + 2 * x + 3;
};

console.log(f(f(f(t) + t) + f(f(t))));
