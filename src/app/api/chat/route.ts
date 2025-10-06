import { openai } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';
import { NextRequest } from 'next/server';
import { SYSTEM_PROMPT } from './system-prompt';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid messages format', { status: 400 });
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user') {
      return new Response('No user message found', { status: 400 });
    }

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: SYSTEM_PROMPT,
      messages: convertToModelMessages(messages),
      temperature: 0.8, // Slightly higher for more personality
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
