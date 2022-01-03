function Main(input) {
  input = input.trim().split("\n");

  const compare = (a, b) => {
    return b - a;
  };

  //文字列から10進数に変換するときはparseIntを使う
  const N = parseInt(input[0], 10);
  const a = input[1].split(" ").map((str) => parseInt(str, 10));
  const sortedA = a.sort(compare);

  let sumAlice = 0;
  let sumBob = 0;
  for (let index = 0; index < N; index++) {
    if (index % 2 === 0) {
      sumAlice += sortedA[index];
    }
    if (index % 2 === 1) {
      sumBob += sortedA[index];
    }
  }
  //

  //出力
  console.log("%s", sumAlice - sumBob);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
