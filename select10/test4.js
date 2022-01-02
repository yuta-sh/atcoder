function Main(input) {
  input = input.trim().split("\n");

  //文字列から10進数に変換するときはparseIntを使う
  const a = parseInt(input[0], 10);
  const b = parseInt(input[1], 10);
  const c = parseInt(input[2], 10);
  const x = parseInt(input[3], 10);

  let count = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (x === 500 * i + 100 * j + 50 * k) {
          count++;
        }
      }
    }
  }

  //出力
  console.log("%d", count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
