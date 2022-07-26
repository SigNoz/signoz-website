import { getLastWord } from "./utils";

describe("Title utils", () => {
  it("Last Word with empty string", () => {
    const { lastWord, preWord } = getLastWord("");
    expect(lastWord).toBe("");
    expect(preWord).toBe("");
  });

  it("Last Word with one word", () => {
    const { lastWord, preWord } = getLastWord("Hello");
    expect(lastWord).toBe("");
    expect(preWord).toBe("Hello");
  });

  it("Last Word with two words", () => {
    const { lastWord, preWord } = getLastWord("Hello World");
    expect(lastWord).toBe("World");
    expect(preWord).toBe("Hello");
  });

  it("Last Word with three words", () => {
    const { lastWord, preWord } = getLastWord("Hello World How Are You");
    expect(lastWord).toBe("You");
    expect(preWord).toBe("Hello World How Are");
  });

  it("Word with whitespace", () => {
    const { lastWord, preWord } = getLastWord("Hello World ");
    expect(lastWord).toBe("World");
    expect(preWord).toBe("Hello");
  });
});
