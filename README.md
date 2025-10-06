# Anton Lev's Personal Website

A modern, interactive personal website featuring an AI-powered chat interface that represents Anton Lev as a digital twin.

## 🚀 Features

- **Interactive AI Chat**: Chat with AI Anton - a digital version of Anton Lev
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **AI Integration**: Powered by OpenAI GPT-4 with custom system prompts
- **Responsive Design**: Beautiful UI with animations and particle effects
- **Real-time Messaging**: Stream responses using AI SDK 5.0

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **AI SDK 5.0** for chat functionality

### Backend & AI
- **OpenAI GPT-4** for AI responses
- **AI SDK 5.0** for streaming chat
- **Custom System Prompts** for personality

### Development
- **TypeScript** for type safety
- **ESLint** for code quality
- **Turbopack** for fast development

## 🎯 AI Features

The website includes an AI chat interface that:
- Responds as Anton Lev personally
- Knows about his technical skills and experience
- Provides helpful development advice
- Maintains a professional yet friendly tone
- Supports multiple languages (Ukrainian, Russian, English)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/levanton/anton-lev-website.git
cd anton-lev-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/chat/           # AI chat API endpoints
│   │   ├── route.ts        # Chat API handler
│   │   └── system-prompt.ts # AI personality configuration
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   └── ChatInterface.tsx   # Chat component
└── hooks/                  # Custom React hooks
```

## 🤖 AI Configuration

The AI personality is configured in `src/app/api/chat/system-prompt.ts`:

- **System Prompt**: Defines Anton's personality, skills, and response style
- **Welcome Message**: Initial message shown to visitors
- **Response Guidelines**: How the AI should behave and respond

## 🎨 Customization

### Updating AI Personality
Edit `src/app/api/chat/system-prompt.ts` to modify:
- Skills and experience
- Personality traits
- Response style
- Welcome message

### Styling
The website uses Tailwind CSS. Main styles are in:
- `src/app/globals.css` - Global styles
- Component-specific styles in JSX

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your OpenAI API key to environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for AI chat | Yes |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Anton Lev** - Senior Front-End/Full-Stack Developer
- GitHub: [@levanton](https://github.com/levanton)
- Website: [Your Website URL]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ by Anton Lev