import * as fs from "fs";

function main() {
  const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

  const map = new Map();
  const num = parseInt(input[0]);
  for (let index = 0; index < num; index++) {
    const element = input[index + 1];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  let ret = 0;
  let n = 0;
  map.forEach((val, key) => {
    if (val > n) {
      n = val;
      ret = key;
    }
  });
  console.log(ret);
}

main();
// mapとforEachでやる。iterableはforEachで実現。forじゃなくてせめてforEachって感じかな、オブジェクト指向的には。
// iterableは変な中間変数とかもろもろいらないですっきりするように人類が頑張ってつくった資産だもんね。
