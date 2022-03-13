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

// [memo]かかった時間:4:28
// しばらくやってなかったのでリハビリ的な感じ。

// 以降処理記載

const x = Number(input[0]);

if (x % 100 === 0 && x / 100 > 0 && x / 100 <= 10) {
  console.log("Yes");
  return;
}
console.log("No");
