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

// [memo]かかった時間:46:21
// 調べるのに12分
// 全部で迷った。小分割対象のnextの出し方、ループを回すときに前回の文字列から更新していないこと、最後のループ脱出方法

// 小分割対象のnextの出し方→これはレアケースはおいておいて、まずは他の代表ケースから考えるべきだった。
// 最後のループ脱出→このファイル自体がくくっていなくても大きな関数扱いなのでreturnでおｋ。

// 以降処理記載

const S = input[0].split("");
const Tstr = input[1];

const baseNum = "a".charCodeAt(0);
const lastNum = "z".charCodeAt(0);

const nextChar = (str) => {
  return String.fromCharCode(
    ((str.charCodeAt(0) - baseNum + 1) % (lastNum - baseNum + 1)) + baseNum
  );
};

for (let i = 0; i < lastNum - baseNum + 1; i++) {
  const Sstr = S.map((str) =>
    nextChar(String.fromCharCode(str.charCodeAt(0) + i))
  ).join("");

  if (Sstr === Tstr) {
    console.log("Yes");

    return;
  }
}

console.log("No");
