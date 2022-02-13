function Main(input) {
  input = input.trim().split("\n");

  const n = Number(input[0]);
  const A = input[1].split(" ");
  const bucket = new Array(n + 1).fill(0);

  for (let index = 0; index < 4 * n - 1; index++) {
    bucket[A[index]]++;
  }

  const idx = bucket.reduce((acc, cur, idx) => {
    // console.log(idx);
    if (cur === 3) {
      return idx;
    }
    return acc + 0;
  }, 0);

  console.log(idx);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間: 35:36
// reduceのidxの使い方（0始まりなのか～等）がわかっていなかった
// 最後にbucket[idx]を取り出そうとしていた。欲しいのはidx、もしくはA[i]。bucketの使い慣れていなさが出ちゃったかな。
