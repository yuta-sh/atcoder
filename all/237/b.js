function Main(input) {
  input = input.trim().split("\n");
  const H = parseInt(input[0].split(" ")[0], 10);
  const W = parseInt(input[0].split(" ")[1], 10);

  let tblA = Array(H);
  for (let i = 0; i < H; i++) {
    tblA[i] = input[i + 1].split(" ");
  }
  let tblB = Array.from(Array(W), () => new Array(H));

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      tblB[j][i] = tblA[i][j];
      // もともとは下記みたいに生成していたが、これだとたぶんi,jループ分[].splitで配列を生成してしまっているんだと思う。
      // なので、いったんtblAを生成しておく。するとiループ分だけ新規配列ができる感じになるので問題なくなる感じっぽい。
      // tbl[j][i] = input[i + 1].split(" ")[j];
    }
  }

  for (let index = 0; index < W; index++) {
    console.log(tblB[index].join(" "));
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間:1時間以上。ずっとtleで悩んでいた。

// 2重配列初期化
// 改行しないconsole.log
// 配列の読み替え方は配列を変えるのではなく出力する方法を変えるだけ
// 大量の標準出力はまずい
// 定義外の配列要素へのアクセスを大量にするとメモリをたくさん食うらしい。なので配列は定義したところにだけアクセスする。二重配列の定義の仕方を覚えておく。
// やはり配列を無駄に生成してしまっていないかを気を付ける。
