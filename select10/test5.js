function Main(input) {
  input = input.trim().split("\n")[0].split(" ");

  //文字列から10進数に変換するときはparseIntを使う
  const N = input[0];
  const A = input[1];
  const B = input[2];

  const sum = (...args) => {
    return args.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  };

  const makeResult = (Ni) => {
    const NiString = String(Ni);

    const arrayNi = [...NiString].map((string) => {
      return parseInt(string, 10);
    });

    // A~Bまでのものであった場合にresultに入れる
    const sumNi = sum(...arrayNi);
    if (sumNi >= A && sumNi <= B) {
      result.push(parseInt(Ni, 10));
    }
  };

  let result = [];

  for (let index = 0; index <= parseInt(N, 10); index++) {
    makeResult(index);
  }

  //出力
  console.log("%d", sum(...result));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
