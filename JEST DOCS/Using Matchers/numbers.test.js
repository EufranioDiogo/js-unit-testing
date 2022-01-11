const { sum } = require("../Getting Started/math");

test("Sum of -2 + -4", () => {
  expect(sum(-2, -4)).toBeLessThan(0);
  expect(sum(-2, -4)).toBeGreaterThan(-10);

  expect(sum(-2, -4)).toBeLessThanOrEqual(-6);
  expect(sum(-2, -4)).toBeGreaterThanOrEqual(-7.6);

  expect(sum(-2, -4)).toBe(-6);
  expect(sum(-2, -4)).toEqual(-6);
});

test("Division of 4 / 7", () => {
  expect(4 / 7).toBeCloseTo(0.571);
});
