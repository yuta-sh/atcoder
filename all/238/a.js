function Main(input) {
  const n = parseInt(input.trim().split("\n"), 10);

  if (Math.pow(2, n) > n * n) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 時間:3:30
