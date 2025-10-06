'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import type { UIMessage } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { WELCOME_MESSAGE } from '../app/api/chat/system-prompt';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use AI SDK chat hook
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    messages: [
      {
        id: '1',
        role: 'assistant',
        parts: [{ type: 'text', text: WELCOME_MESSAGE }],
      },
    ],
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const handleSendMessage = useCallback(
    (inputValue?: string) => {
      const messageToSend = inputValue || input;
      
      if (!messageToSend.trim() || status !== 'ready') return;

      sendMessage({ text: messageToSend });
      setInput(''); // Always clear input after sending
    },
    [sendMessage, input, status]
  );


  // Convert AI SDK messages to our format
  const formattedMessages: Message[] = messages.map((msg: UIMessage, index) => {
    // Extract text from parts array
    const textParts = msg.parts
      .filter(part => part.type === 'text')
      .map(part => part.text)
      .join('');
    
    return {
      id: index + 1,
      text: textParts,
      sender: msg.role === 'user' ? 'user' : 'assistant',
      timestamp: new Date(),
    };
  });


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [formattedMessages]);

  const handleSendClick = () => {
    if (!input.trim() || status !== 'ready') return;
    handleSendMessage(input);
    setInput(''); // Clear input after sending
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  console.log(status)

  return (
    <div className="w-full max-w-2xl h-[calc(100vh-6rem)] bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/50">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Let&apos;s Chat
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </h2>
        <p className="text-sm text-slate-400 mt-1">Ask me anything about my work</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {formattedMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-700/50 text-slate-100 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-60 mt-2">
                {message.timestamp.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: false 
                })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-slate-700/50 bg-slate-800/50">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={status !== 'ready'}
            className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-400 disabled:opacity-50"
          />
          <button
            onClick={handleSendClick}
            disabled={status !== 'ready' || !input.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed rounded-xl transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-2"
          >
            {status !== 'ready' ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
