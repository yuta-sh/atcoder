function Main(input) {
  let next = input.trim().replace("\n", "").split("").reverse().join("");

  const choice7 = ["dreamer"];
  const choice5 = ["dream", "erase"];
  const choice6 = ["eraser"];
  const reverseChoice5 = choice5.map((str) => str.split("").reverse().join(""));
  const reverseChoice6 = choice6.map((str) => str.split("").reverse().join(""));
  const reverseChoice7 = choice7.map((str) => str.split("").reverse().join(""));

  const fetchNextRevStr = (reverseInput) => {
    if (
      reverseChoice5.some((revStr) => reverseInput.substring(0, 5) === revStr)
    ) {
      return reverseInput.substring(5);
    }
    if (
      reverseChoice6.some((revStr) => reverseInput.substring(0, 6) === revStr)
    ) {
      return reverseInput.substring(6);
    }
    if (
      reverseChoice7.some((revStr) => reverseInput.substring(0, 7) === revStr)
    ) {
      return reverseInput.substring(7);
    }

    throw new Error("no answer");
  };

  try {
    while (next.length != 0) {
      next = fetchNextRevStr(next);
    }
    console.log("YES");
  } catch (error) {
    console.log("NO");
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
