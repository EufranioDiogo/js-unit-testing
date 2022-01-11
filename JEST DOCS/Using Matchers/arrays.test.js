const products = ["Mandioca", "Jinguba", "Abacate", "Tomate"];

test("Products contain Mandioca", () => {
  expect(products).toContain("Mandioca");
});

test("Products not containing Sumo", () => {
  expect(products).not.toContain("Sumo");
});
