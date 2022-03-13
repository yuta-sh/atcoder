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

// [memo]かかった時間:42:21
// TLEしてしまってかなり時間かかってしまった。
// setを使ったらいけたので、TLEしているときの可能性の一つとして、重複を許さない値の場合に配列で検索しつつやってるとアルゴリズム的に大量の時間を食ってしまうのかもしれない
// この問題はでも典型的なSet(ハッシュテーブル)を使う問題だな。
// 重複を許さずに登録していくようなもので、気にしているのが値を保持しているのかどうかだけで、順番を気にしていない。まさにハッシュテーブルの要件。
// ハッシュテーブルと同様の理由により、バケツ法でも回答可能。
// きっと愚直にやったらTLEするようにできているんだろうこの問題は。
// あ、愚直にやって一個前のコミット、outputFriredListが1,2,3,4,...Nになっていくから、計算量が1/2(N*(N+1))だ。つまりO(N^2)。で、Nは10^5まで。ということは10^10がmax。だからか。

// 以降処理記載
const n = input[0].split(" ").map((str) => Number(str))[0];
const x = input[0].split(" ").map((str) => Number(str))[1];

const aList = input[1].split(" ").map((str) => Number(str));

let outputFriendList = new Set();
outputFriendList.add(x);

let inputFriend = x;
let fetched = undefined;

do {
  fetched = aList[inputFriend - 1];

  if (!outputFriendList.has(fetched)) {
    outputFriendList.add(fetched);
  }

  inputFriend = fetched;
} while (!outputFriendList.has(aList[inputFriend - 1]));

console.log(outputFriendList.size);
