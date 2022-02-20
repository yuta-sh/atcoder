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

// [memo]かかった時間:13:04
// まとめないで愚直に書き出すっていうのはよかった。
// このレベルならエッジケースもそこまで考えずにいったん楽観的に作成して出してみて通らなければ後から考えるって手法でもいい気がする

// 以降処理記載
const s = Number(input[0].split(" ")[0]);
const t = Number(input[0].split(" ")[1]);
const x = Number(input[0].split(" ")[2]);

if (s <= t) {
  if (s <= x && x <= t) {
    console.log("Yes");
    return;
  }
  console.log("No");
  return;
}

if (s > t) {
  if (s <= x && x < 24) {
    console.log("Yes");
    return;
  }
  if (0 <= x && x < t) {
    console.log("Yes");
    return;
  }
  console.log("No");
  return;
}

if ((s = t)) {
  throw new Error();
}
