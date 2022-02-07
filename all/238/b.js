function Main(input) {
  input = input.trim().split("\n");
  const N = input[0];
  const angleNum = input[1].split(" ").map((x) => parseInt(x, 10));
  const isCuttedAngles = Array(360).fill(false);
  isCuttedAngles[0] = true;

  let sumAngle = 0;
  for (let index = 0; index < N; index++) {
    sumAngle = sumAngle + angleNum[index];
    isCuttedAngles[sumAngle % 360] = true;
  }

  let max = 0;
  let cur = 0;
  for (let index = 1; index <= 360; index++) {
    cur++;
    if (isCuttedAngles[index % 360]) {
      if (max < cur) {
        max = cur;
      }
      cur = 0;
    }
  }
  console.log(max);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// かかった時間:15分考え、方針浮かばず
// 図形自体を回転させるのではなく、図形に変化を加える包丁の方を回転させる発想
