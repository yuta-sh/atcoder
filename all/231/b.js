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

// [memo]かかった時間:33:45
// データ構造を考えるのに時間がかかった
// 一部はイミュータブルにしなかったせいで途中でどこでバグっているのかがわかりづらくなりバグを追うのに時間がかかった
// filterとfindとsomeで返す型が違うのに、booleanを求めているのにfilterを使っていてバグった
// reduceで単一値でなくオブジェクトで複数の値を持っておく発想が出てこなかった

// 以降処理記載
const n = Number(input[0]);
const S = input.slice(1);

const countArray = [];

// [{key:"name",count:0}]

for (let i = 0; i < n; i++) {
  const found = countArray.some((item) => item.key === S[i]);

  if (!found) {
    countArray.push({ key: S[i], count: 1 });
  }
  if (found) {
    countArray[countArray.findIndex((item) => item.key === S[i])].count++;
  }
}

const max = countArray.reduce(
  (acc, cur, idx) => {
    if (cur.count > acc.maxValue) {
      return { maxValue: cur.count, maxName: cur.key };
    }
    return acc;
  },
  {
    maxValue: 0,
    maxName: 0,
  }
);

console.log(max.maxName);
