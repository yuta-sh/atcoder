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

// [memo]かかった時間:

// 以降処理記載
const n = input[0].split(" ").map((str) => Number(str))[0];
const x = input[0].split(" ").map((str) => Number(str))[1];

const aList = input[1].split(" ").map((str) => Number(str));

let outputFriendList = [x];
let inputFriend = x;
let fetched = undefined;

do {
  fetched = aList[inputFriend - 1];

  if (!outputFriendList.some((num) => num === fetched)) {
    outputFriendList.push(fetched);
  }
  inputFriend = fetched;
} while (!outputFriendList.some((num) => num === aList[inputFriend - 1]));

console.log(outputFriendList.length);
