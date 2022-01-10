const orderTotal = (order) => {
  return order.items.reduce((accumulator, actualItem) => {
    return actualItem.price * (actualItem.quant || 1) + accumulator;
  }, 0);
};

if (
  orderTotal({
    items: [
      { name: "Dragon Food", price: 8, quant: 1 },
      { name: "Dragon Jail", price: 800, quant: 1 },
    ],
  }) !== 808
) {
  throw new Error("Fail: not valid total (Test 1)");
}

if (
  orderTotal({
    items: [{ name: "Dragon Toy", price: 9, quant: 3 }],
  }) !== 27
) {
  throw new Error("Fail: not valid total (Test 2)");
}

if (
  orderTotal({
    items: [
      { name: "Dragon Toy", price: 9, quant: 3 },
      { name: "Dragon Bed", price: 9, quant: 3 },
    ],
  }) !== 54
) {
  throw new Error("Fail: not valid total (Test 2)");
}


if (
  orderTotal({
    items: [
      { name: "Dragon Toy", price: 9 },
      { name: "Dragon Bed", price: 9 },
    ],
  }) !== 18
) {
  throw new Error("Fail: not valid total (Test 2)");
}