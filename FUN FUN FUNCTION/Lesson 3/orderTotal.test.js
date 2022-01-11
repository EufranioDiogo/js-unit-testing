const orderTotal = require("./orderTotal");

//it("works", () => {
//  expect(1).toBe(2);
//});

it("Total Price - Test 1", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon Food", price: 8, quant: 1 },
        { name: "Dragon Jail", price: 800, quant: 1 },
      ],
    })
  ).toBe(808);
});

it("Total Price - Test 2", () => {
  expect(
    orderTotal({
      items: [{ name: "Dragon Toy", price: 9, quant: 3 }],
    })
  ).toBe(27);
});

it("Total Price - Test 3", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon Toy", price: 9, quant: 3 },
        { name: "Dragon Bed", price: 9, quant: 3 },
      ],
    })
  ).toBe(54);
});


it("Total Price - Test 4", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon Toy", price: 9 },
        { name: "Dragon Bed", price: 9 },
      ],
    })
  ).toBe(18);
});
