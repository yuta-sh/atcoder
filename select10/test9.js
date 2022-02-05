function Main(input) {
  input = input.trim().split("\n");
  const reverseInputArray = input[0].split("").reverse();

  const choice7 = ["dreamer"];
  const choice5 = ["dream", "erase"];
  const choice6 = ["eraser"];
  const reverseChoice5 = choice5.map((str) => str.split("").reverse().join(""));
  const reverseChoice6 = choice6.map((str) => str.split("").reverse().join(""));
  const reverseChoice7 = choice7.map((str) => str.split("").reverse().join(""));

  const fetchNextRevStr = (reverseInputArray) => {
    if (
      reverseChoice5.some(
        (revStr) => reverseInputArray.slice(0, 5).join("") === revStr
      )
    ) {
      return reverseInputArray.slice(5);
    }
    if (
      reverseChoice6.some(
        (revStr) => reverseInputArray.slice(0, 6).join("") === revStr
      )
    ) {
      return reverseInputArray.slice(6);
    }
    if (
      reverseChoice7.some(
        (revStr) => reverseInputArray.slice(0, 7).join("") === revStr
      )
    ) {
      return reverseInputArray.slice(7);
    }

    throw new Error("no answer");
  };

  try {
    let next = reverseInputArray;

    do {
      next = fetchNextRevStr(next);
    } while (next.length != 0);

    console.log("YES");
  } catch (error) {
    console.log("NO");
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("./input.txt", "utf8"));
// 本番は下記で提出
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
