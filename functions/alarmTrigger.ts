export const handler = async () => {
  throw new Error(`Occured @ ${new Date().toISOString()}`);
};
