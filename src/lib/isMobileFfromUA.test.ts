import { isMobile } from "./isMobileFromUA";

describe("utils", () => {
  it("should return true if user agent is mobile", () => {
    const userAgent =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1";
    expect(isMobile(userAgent)).toBe(true);
  });
  it("should return false if user agent is not mobile", () => {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36";
    expect(isMobile(userAgent)).toBe(false);
  });
});
