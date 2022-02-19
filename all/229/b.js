// ローカルは下記で実行
// -------------------------------------------------------------
const input = require("fs")
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n");

// 本番は下記で提出
// -------------------------------------------------------------
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// -------------------------------------------------------------

// [memo]かかった時間:27:30で諦め

// 以降処理記載

const a = input[0].split(" ")[0];
const b = input[0].split(" ")[1];

let min = 0;
let max = 0;

if (a.length < b.length) {
  min = Number(a);
  max = Number(b);
} else {
  min = Number(b);
  max = Number(a);
}

console.log(String(min).length);

for (let i = 0; i < String(min).length; i++) {
  if ((min % 10) + (max % 10) >= 10) {
    console.log("Hard");
    return;
  }
  min = min / 10;
  max = max / 10;
}

console.log("Easy");
