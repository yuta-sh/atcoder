function Main(input) {
  input = input.trim().split("\n");

  //文字列から10進数に変換するときはparseIntを使う
  const a = parseInt(input[0], 10);
  const s = "test";

  //出力
  console.log("%d %s", a, s);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間:
