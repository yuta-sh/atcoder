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

// [memo]かかった時間:38:33
// 2重配列のやり方が相変わらず弱い。要練習。
// 少なくとも2重配列で項番を0→1にずらすのはやめたほうがいい。配列処理がめんどくさいので。どっちかというと問題文のほうのi,jを-1して読み替えるべきと学んだ。
// const [h,w]のときの数字変換とかを忘れがち。気を付けること。
// 2重配列のときはiとかうまく使わずにオブジェクト指向的に処理したい～とか考えるのいったんやめよう。どうせ項番必要なんだからおとなしくfor文で初期化処理を書く

// 以降処理記載
const [h, w] = input[0].split(" ").map((str) => Number(str));
const inputBody = input.slice(1);

const aList = Array(h);

for (let i = 0; i < h; i++) {
  aList[i] = inputBody[i].split(" ").map((str) => Number(str));
}

let isNo = false;

for (let i1 = 0; i1 < h; i1++) {
  for (let i2 = i1 + 1; i2 < h; i2++) {
    for (let j1 = 0; j1 < w; j1++) {
      for (let j2 = j1 + 1; j2 < w; j2++) {
        if (aList[i1][j1] + aList[i2][j2] > aList[i2][j1] + aList[i1][j2]) {
          isNo = true;
        }
      }
    }
  }
}

if (isNo) {
  console.log("No");
} else {
  console.log("Yes");
}
