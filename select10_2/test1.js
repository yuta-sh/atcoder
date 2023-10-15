// ローカルは下記で実行
// -------------------------------------------------------------
const judge = (numA, numB) => {
  if (numA % 2 === 0 || numB % 2 === 0) {
    console.log("Even");
    return;
  }

  console.log("Odd");
};

const input = require("fs")
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split(" ");

const a = input[0];
const b = input[1];
const numA = parseInt(a);
const numB = parseInt(b);

judge(numA, numB);

// 本番は下記で提出
// -------------------------------------------------------------
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// -------------------------------------------------------------

// [memo]かかった時間:

// 以降処理記載
