function Main(input) {
  const nAndDStr = input.trim().split("\n");

  const dStr = nAndDStr.slice(1);
  //文字列から10進数に変換するときはparseIntを使う
  const dNum = dStr.map((di) => parseInt(di, 10));
  const distinctD = Array.from(new Set(dNum));

  const sortedD = distinctD.sort((a, b) => {
    return a - b;
  });

  //出力
  console.log("%d", sortedD.length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
