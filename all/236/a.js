function Main(input) {
  input = input.trim().split("\n");
  const S = input[0];
  const a = Number(input[1].split(" ")[0]);
  const b = Number(input[1].split(" ")[1]);

  const Sarray = [...S];

  const swap = Sarray[a - 1];
  Sarray[a - 1] = Sarray[b - 1];
  Sarray[b - 1] = swap;
  console.log(Sarray.join(""));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間: 7:21
// 一瞬イミュータブルにするには、、とか考えたけどいったんここではそういうのはいいや。破壊的にやろう。
