# AI Chat Setup

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

## Getting OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign in or create an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and paste it in your `.env.local` file

## Features

- **Streaming Responses**: Real-time AI responses using AI SDK
- **Professional Context**: AI assistant specialized in fullstack development
- **Error Handling**: Robust error handling and loading states
- **Type Safety**: Full TypeScript support

## API Route

The chat API is located at `/api/chat` and uses:
- OpenAI GPT-4o-mini model
- Streaming responses
- Professional system prompt for developer portfolio
