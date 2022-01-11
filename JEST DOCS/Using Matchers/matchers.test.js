test("Object test", () => {
  let data = { firstName: "Eufránio" };
  data.lastName = "Diogo";

  expect(data).toEqual({
    firstName: "Eufránio",
    lastName: "Diogo",
  });
});

test("Sum of two positive numbers not be 0", () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

