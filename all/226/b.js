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
// そうか、sliceはarrayでもstringでもあるのか。
// for文でなくてオブジェクト指向的に変えてみた

// 以降処理記載
const n = Number(input[0]);
const aList = input.slice(1);

const set = new Set();

aList.forEach((ai) => {
  const iStr = ai.slice(2);
  if (!set.has(iStr)) {
    set.add(iStr);
  }
});
console.log(set.size);
