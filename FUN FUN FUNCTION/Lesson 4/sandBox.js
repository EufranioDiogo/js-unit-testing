const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const result = axios
  .get(
    `http://apilayer.net/api/rate?access_key=${process.env.API_KEY}&country_code=DE`
  )
  .then((response) => {
    return response.data.standard_rate;
  })
  .catch((error) => {
    console.log(error.message);
  });
result;
