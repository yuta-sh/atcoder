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

// [memo]かかった時間:9:50
// 0埋めの方法知らなかったから調べた。String.padStart(length,paddingString)だってさ。
// 愚直に自分で実装した場合も考えたい。

// 以降処理記載
const num = Number(input[0]);

if (num >= 42) {
  console.log("AGC" + String(num + 1).padStart(3, "0"));
} else {
  console.log("AGC" + String(num).padStart(3, "0"));
}

// const fetchDigit = (num) => {
//   return String(num).split("").length;
// };

// const fetch0PaddingString = (num) => {
//   console.log(num);
//   return "0".repeat(3 - fetchDigit(num)) + String(num);
// };
// const AGC = "AGC";
// const count =
//   num >= 42 ? fetch0PaddingString(num + 1) : fetch0PaddingString(num);
// console.log(AGC + count);
