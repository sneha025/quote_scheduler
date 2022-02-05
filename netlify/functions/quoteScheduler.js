const axios = require("axios");
const handler = async () => {
  const response = await axios
    .get("https://zenquotes.io/api/random")
    .then((data) => {
      return data.data;
    });
  console.log(response);
  return {
    statusCode: 200,
    body: JSON.stringify(response[0].h),
  };
};

module.exports.handler = handler;
