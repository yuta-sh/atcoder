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

// [memo]かかった時間:11:57
// 最近b問題でハッシュマップの利用が多いなあ。これには慣れてきた

// 以降処理記載
const n = Number(input[0]);

const set = new Set();

for (let i = 1; i < n + 1; i++) {
  const iStr = input[i].slice(2);
  if (!set.has(iStr)) {
    set.add(iStr);
  }
}
console.log(set.size);
