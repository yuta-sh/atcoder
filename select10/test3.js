function Main(input) {
  input = input.trim().split("\n");

  //文字列から10進数に変換するときはparseIntを使う
  const N = parseInt(input[0], 10);
  const a = input[1].trim().split(" ");

  let count = 0;
  while (true) {
    let canDivide = true;
    for (let index = 0; index < N; index++) {
      if (a[index] % 2 === 1) {
        canDivide = false;
      }
      a[index] = a[index] / 2;
    }
    if (!canDivide) {
      break;
    }

    count++;
  }

  //出力
  console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
