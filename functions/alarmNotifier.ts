export const handler = async (event: any) => {
  const { Records } = event;
  for (const record of Records) {
    console.log({ record });
    const { Sns: { Message } } = record;
    const message = JSON.parse(Message);
    console.log({ message });
  }
};
