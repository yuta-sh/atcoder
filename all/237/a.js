function Main(input) {
  const N = parseInt(input.trim().split("\n"), 10);

  //文字列から10進数に変換するときはparseIntを使う

  if (N >= -Math.pow(2, 31) && N < Math.pow(2, 31)) {
    console.log("Yes");
  }
  //出力
  else {
    console.log("No");
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間: 5:00
