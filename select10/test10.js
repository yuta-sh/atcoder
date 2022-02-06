function Main(input) {
  input = input.trim().split("\n");
  const N = input[0];
  const txy = ["0 0 0", ...input.slice(1)];

  //文字列から10進数に変換するときはparseIntを使う
  const a = parseInt(input[0], 10);
  const s = "test";

  try {
    for (let index = 0; index < N; index++) {
      const txyArray = txy[index].split(" ");
      const ti = parseInt(txyArray[0], 10);
      const xi = parseInt(txyArray[1], 10);
      const yi = parseInt(txyArray[2], 10);

      const txyArrayNext = txy[index + 1].split(" ");
      const tiNext = parseInt(txyArrayNext[0], 10);
      const xiNext = parseInt(txyArrayNext[1], 10);
      const yiNext = parseInt(txyArrayNext[2], 10);

      const diffT = Math.abs(tiNext - ti);
      const diffX = Math.abs(xiNext - xi);
      const diffY = Math.abs(yiNext - yi);

      if (diffT < diffX + diffY) {
        throw new Error();
      }

      if (diffT > diffX + diffY) {
        const ReachableByLoop = (diffT - (diffX + diffY)) % 2 === 0;

        if (!ReachableByLoop) {
          throw new Error();
        }
      }
    }

    console.log("Yes");
  } catch (error) {
    console.log("No");
  }

  //出力
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
