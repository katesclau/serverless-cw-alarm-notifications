export const handler = async (event: any) => {
  console.log({ event });
  const { Records } = event;
  for (const record of Records) {
    console.log({ record });
  }
};
