function Main(input) {
  input = input.trim().split(" ");

  //文字列から10進数に変換するときはparseIntを使う
  const a = parseInt(input[0], 10);
  const b = parseInt(input[1], 10);

  const isEven = a % 2 === 0 || b % 2 === 0;

  //出力
  isEven ? console.log("Even") : console.log("Odd");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
