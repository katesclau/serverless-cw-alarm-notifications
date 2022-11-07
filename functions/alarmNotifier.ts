import { Message, SNSEvent } from "./types";

export const handler = async (event: SNSEvent) => {
  const { Records } = event;
  for (const record of Records) {
    console.log({ record });
    const { Sns: { Message } } = record;
    const message: Message = JSON.parse(Message);
    console.log({ message });
  }
};
