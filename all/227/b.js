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

// [memo]かかった時間:20:19
// 問題からのありうる範囲の絞り込みに時間がかかった。ハッシュテーブルはすぐに思いついた。
// 最後にfor文のループが、ただの回数でなくて純粋な値なので1始まりで開始しないといけないということに（正の整数なので）気づくのが少し遅れた。
// for文ではiが回数だけなのか値の意味合いを持つのかを今後も気にした方がいい。

// 以降処理記載
const n = Number(input[0]);
const sList = input[1].split(" ").map((str) => Number(str));

const set = new Set();
for (let i = 1; i <= 142; i++) {
  for (let j = 1; j <= 142; j++) {
    set.add(4 * i * j + 3 * i + 3 * j);
  }
}
let count = 0;
sList.forEach((item) => {
  if (!set.has(item)) {
    count++;
  }
});

console.log(count);
// b=1として
// 7a+1=1000
// a=142までの数

// a=1として、
// 3+7b = 1000
// b=142までの数
