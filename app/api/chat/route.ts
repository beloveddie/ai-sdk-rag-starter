import { cohere } from '@ai-sdk/cohere';
import { convertToCoreMessages, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: cohere('command-r-plus'),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}