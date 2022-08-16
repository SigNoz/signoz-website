import { isValidEmail } from "./utils";

describe("SubscribeToUpdates", () => {
  it("isValid Email", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("asd")).toBe(false);
    expect(isValidEmail("asd@")).toBe(false);
    expect(isValidEmail("asd@asd.com")).toBe(true);
    expect(isValidEmail("asdasd@")).toBe(false);
    expect(isValidEmail("sample")).toBe(false);
  });
});
