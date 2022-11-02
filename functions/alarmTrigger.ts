export const handler = async () => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: "Sample Error",
      description: `Occured @ ${Date.now().toLocaleString()}`,
    }),
  };
};
