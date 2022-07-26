export const getLastWord = (str: string | React.ReactElement) => {
  if (typeof str === "string") {
    let words = str.split(" ");

    if (words.length === 1) {
      return {
        lastWord: "",
        preWord: words[0],
      };
    }

    if (words[words.length - 1] === "") {
      words.pop();
    }

    const preWord = words.slice(0, words.length - 1).join(" ");
    const lastWord = words.slice(words.length - 1).join(" ");

    return {
      preWord: preWord,
      lastWord: lastWord,
    };
  }
  return {
    preWord: str,
    lastWord: "",
  };
};
