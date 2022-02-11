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

const n = input[0];
const H = input[1].split(" ").map((str) => Number(str));

let now = H[0];
for (let i = 1; i < n; i++) {
  if (now >= H[i]) {
    break;
  }
  now = H[i];
}
console.log(now);

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）

// かかった時間:8:18
// なんか今回超絶簡単だったな。
