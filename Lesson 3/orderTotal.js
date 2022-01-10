const orderTotal = (order) => {
  return order.items.reduce((accumulator, actualItem) => {
    return actualItem.price * (actualItem.quant || 1) + accumulator;
  }, 0);
};

module.exports = orderTotal;
