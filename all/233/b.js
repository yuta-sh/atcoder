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

// [memo]かかった時間:11:40

// 以降処理記載
const l = Number(input[0].split(" ")[0]);
const r = Number(input[0].split(" ")[1]);

const Sarray = input[1].split("");

const left = Sarray.slice(0, l - 1).join("");

const middle = Sarray.slice(l - 1, r)
  .reverse()
  .join("");
const right = Sarray.slice(r).join("");
console.log(left + middle + right);
