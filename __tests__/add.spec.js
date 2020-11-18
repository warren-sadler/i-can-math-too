const { add } = require("..");

describe("Addition", () => {
  test("summing two numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
  test("summing a string and number throws an error", () => {
    expect(() => add(100, "dude")).toThrow();
    expect(() => add("wow", 200)).toThrow();
  });
});
