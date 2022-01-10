const orderTotal = require("./orderTotal");
const dotenv = require("dotenv");
dotenv.config();
//it("works", () => {
//.then(result => expect(result).toBe(2));
//});
const emptyFunction = (url) => {}

it("Verify if api of vat is called", () => {
  let isFakedFetchCalled = false;

  const fakeFetch = (url) => {
    expect(url).toBe(`http://apilayer.net/api/rate?access_key=${process.env.API_KEY}&country_code=DE`)
    isFakedFetchCalled = true;
  }
  orderTotal(fakeFetch, {
    country: 'DE',
    items: [
      { name: "Dragon Food", price: 8, quant: 1 },
      { name: "Dragon Jail", price: 800, quant: 1 },
    ],
  }).then((result) => {

    expect(isFakedFetchCalled).toBe(true)
  });
});

it("Total Price - Test 1", () => {
  orderTotal(emptyFunction, {
    items: [
      { name: "Dragon Food", price: 8, quant: 1 },
      { name: "Dragon Jail", price: 800, quant: 1 },
    ],
  }).then((result) => expect(result).toBe(808));
});

it("Total Price - Test 2", () => {
  orderTotal(emptyFunction, {
    items: [{ name: "Dragon Toy", price: 9, quant: 3 }],
  }).then((result) => expect(result).toBe(27));
});

it("Total Price - Test 3", () => {
  orderTotal(emptyFunction, {
    items: [
      { name: "Dragon Toy", price: 9, quant: 3 },
      { name: "Dragon Bed", price: 9, quant: 3 },
    ],
  }).then((result) => expect(result).toBe(54));
});

it("Total Price - Test 4", () => {
  orderTotal(emptyFunction, {
    items: [
      { name: "Dragon Toy", price: 9 },
      { name: "Dragon Bed", price: 9 },
    ],
  }).then((result) => expect(result).toBe(18));
});
