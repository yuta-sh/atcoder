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

// [memo]かかった時間:12:30
// まあ、そのまま書くだけの問題と言われればそうかもだけど、ちょっと問題文の解釈に時間がかかった。

// 以降処理記載
// 黒が対角線を持ち、かつ辺を持たない
const s1 = input[0].split("");
const s2 = input[1].split("");

if (s1[0] === "#" && s2[1] === "#") {
  if (s1[1] === "#" || s2[0] === "#") {
    console.log("Yes");
    return;
  }
  console.log("No");
  return;
}

if (s1[1] === "#" && s2[0] === "#") {
  if (s1[0] === "#" || s2[1] === "#") {
    console.log("Yes");
    return;
  }
  console.log("No");
  return;
}
console.log("Yes");
