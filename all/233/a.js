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

// [memo]かかった時間: 4:49

// 以降処理記載
let x = Number(input[0].split(" ")[0]);
const y = Number(input[0].split(" ")[1]);

let count = 0;
for (let i = 0; i < 100; i++) {
  if (y > x) {
    x = x + 10;
    count++;
  }
  if (y <= x) {
    break;
  }
}
console.log(count);
