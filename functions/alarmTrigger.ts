export const handler = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
