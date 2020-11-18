describe("Division", () => {
  test("dividing by 0 raises an error", () => {
    expect(() => divide(1, 0)).toThrow();
  });
});
