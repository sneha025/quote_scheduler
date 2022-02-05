const handler = async () => {
  const response = await fetch("https://zenquotes.io/api/random");
  return {
    statusCode: 200,
    body: response,
  };
};