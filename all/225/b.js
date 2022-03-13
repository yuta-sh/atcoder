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

// [memo]かかった時間:18:11
// newしたarrayをfillするの忘れてたり、maxをreduceで求めるときにreturn accの方を忘れてたり、Numberでキャストするのを忘れてたりして遅くなった。やっぱり少しでもやらないと速度が落ちてる気がする

// 以降処理記載
const [nStr, ...pairList] = input;
const n = Number(nStr);

const bucket = Array(n + 1).fill(0);

pairList.forEach((pair) => {
  const [a, b] = pair.split(" ").map((str) => Number(str));

  bucket[a]++;
  bucket[b]++;
});

const max = bucket.reduce((acc, cur) => {
  if (cur > acc) {
    return cur;
  }
  return acc;
}, 0);

if (max === n - 1) {
  console.log("Yes");
  return;
}

console.log("No");
