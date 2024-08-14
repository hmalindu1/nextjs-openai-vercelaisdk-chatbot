import { openai } from '@ai-sdk/openai';
import { streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    
  const { messages } = await req.json();

  const data = new StreamData();
//   data.append({ test: 'value' });

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
    // onFinish() {
    //     data.close();
    //   },
    system: 'if user request a title limit the response to 10 words. If user request a description, limit the response to 50 words.',
  });

  return result.toDataStreamResponse();
}