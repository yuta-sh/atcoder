function Main(input) {
  input = input.trim().split("\n");
  const abc = input[0].split("").map((str) => Number(str));

  const sum =
    abc[0] * 100 +
    abc[1] * 10 +
    abc[2] +
    abc[1] * 100 +
    abc[2] * 10 +
    abc[0] +
    abc[2] * 100 +
    abc[0] * 10 +
    abc[1];

  console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間8:30
//なんかよくMain関数の最後の}を消すことでエラーになる事象が多発しているから変にエラーになったらそこを疑うこと。
