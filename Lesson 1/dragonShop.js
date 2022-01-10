const someOrders = {
  items: [
    { name: "Dragon Food", price: 8, quant: 2 },
    { name: "Dragon Jail", price: 800, quant: 1 },
    { name: "Shipping price", price: 80, shipping: true },
  ],
};

const computeTotal = (orders) => {
  const result = orders.items
    .filter((order) => !order.shipping)
    .reduce(
      (accumultator, actualItem) =>
        accumultator + actualItem.price * actualItem.quant,
      0
    );
  const shippingItem = orders.items.find((item) => !!item.shipping);

  return shippingItem.price > 1000 ? result : result + shippingItem.price;
};

const result = computeTotal(someOrders);

console.log(result);
