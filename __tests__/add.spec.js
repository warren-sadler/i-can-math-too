const { add } = require("..");

describe("Addition", () => {
  test("summing two-numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
});
