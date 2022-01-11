const {
  sum,
  multiply,
  division,
  subtraction,
  restDivision,
} = require("./math");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Multiply 1 x 2 to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("Division 1 / 2 to equal 2", () => {
  expect(division(1, 2)).toBe(0.5);
});

test("Sub 1 - 2 to equal -1", () => {
  expect(subtraction(1, 2)).toBe(-1);
});

test("Rest 1 % 2 to equal -1", () => {
  expect(restDivision(1, 2)).toBe(1);
});
