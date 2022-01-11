test("theres Eu in Eufránio", () => {
  expect("Eufránio").toMatch(/Eu/);
});

test("Not has a in word", () => {
  expect("coco").not.toMatch(/a/);
});
