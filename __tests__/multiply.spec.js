const { multiply } = require("..");

describe("Multiplication", () => {
  test("multiplying two negatives, creates a positive", () => {
    expect(multiply(-1, -3)).toBe(3);
  });
});
