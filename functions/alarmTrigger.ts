export const handler = async () => {
  if ((new Date()).getMinutes()%2) {
    throw new Error(`Occured @ ${new Date().toISOString()}`);
  }
  return;
};
