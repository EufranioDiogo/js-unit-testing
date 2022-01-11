const dotenv = require("dotenv");
dotenv.config();


const orderTotal = (fetch, order) => {
  fetch(`http://apilayer.net/api/rate?access_key=${process.env.API_KEY}&country_code=${order.country}`)
  return Promise.resolve(
    order.items.reduce((accumulator, actualItem) => {
      return actualItem.price * (actualItem.quant || 1) + accumulator;
    }, 0)
  );
};

module.exports = orderTotal;
