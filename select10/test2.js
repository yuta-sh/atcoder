function Main(input) {
  input = input.trim();

  //文字列から10進数に変換するときはparseIntを使う
  const array = [];
  array[0] = input.slice(0, 1);
  array[1] = input.slice(1, 2);
  array[2] = input.slice(2, 3);

  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "1") {
      count++;
    }
  }

  //出力
  console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
