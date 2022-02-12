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

// [memo]かかった時間:14:12

// 以降処理記載
const n = Number(input[0]);

const X = input.slice(1).map((array) => Number(array.split(" ")[0]));
const Y = input.slice(1).map((array) => Number(array.split(" ")[1]));

let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const xLength = X[i] - X[j];
    const yLength = Y[i] - Y[j];
    const length = Math.sqrt(xLength * xLength + yLength * yLength);
    if (length > max) {
      max = length;
    }
  }
}

console.log(max);
