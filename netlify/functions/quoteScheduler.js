import fetch from "node-fetch";
const handler = async () => {
  const response = await fetch("https://zenquotes.io/api/random");
  return {
    statusCode: 200,
    body: response,
  };
};

module.exports.handler = handler;
