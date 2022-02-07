const fetchAnswer = (n, y) => {
  let hasAnswer = false;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      const answer = 10000 * i + 5000 * j + 1000 * (n - i - j);
      if (n - i - j >= 0 && answer === y) {
        hasAnswer = true;
        return [i, j, n - i - j];
      }
    }
  }
  if (!hasAnswer) return [-1, -1, -1];
};

function Main(input) {
  input = input.trim().split("\n");
  const n = parseInt(input[0].split(" ")[0], 10);
  const y = parseInt(input[0].split(" ")[1], 10);

  const result = fetchAnswer(n, y);
  console.log(result[0], result[1], result[2]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
