import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, RefreshCw, Copy, Check, Download, Eraser } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  persona?: {
    name: string;
    icon: React.ElementType;
  };
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  onRegenerate?: () => void;
  onClear?: () => void;
  placeholder?: string;
  persona?: {
    name: string;
    icon: React.ElementType;
  };
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  onSendMessage,
  onRegenerate,
  onClear,
  placeholder = 'Type a message...',
  persona
}) => {
  const [input, setInput] = useState('');
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
    setIsTyping(true);
    // Simulate typing effect - in production this would be based on actual AI response
    setTimeout(() => setIsTyping(false), 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = async (content: string, messageId: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedMessageId(messageId);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const downloadChat = () => {
    const chatContent = messages
      .map(m => `${m.type === 'user' ? 'User' : persona?.name}: ${m.content}`)
      .join('\n\n');
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-with-${persona?.name}-${new Date().toISOString()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          {persona && <persona.icon className="w-5 h-5 text-primary" />}
          <h2 className="font-semibold">
            {persona ? `Chat with ${persona.name}` : 'Chat'}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {messages.length > 0 && (
            <>
              <button
                onClick={downloadChat}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="Download chat"
              >
                <Download className="w-4 h-4" />
              </button>
              {onClear && (
                <button
                  onClick={onClear}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  title="Clear chat"
                >
                  <Eraser className="w-4 h-4" />
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="h-[500px] overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div
                className={`p-2 rounded-full ${
                  message.type === 'user'
                    ? 'bg-primary'
                    : 'bg-primary/10'
                }`}
              >
                {message.type === 'user' ? (
                  <User className="w-5 h-5 text-primary-foreground" />
                ) : (
                  persona && <persona.icon className="w-5 h-5 text-primary" />
                )}
              </div>
              <div className="group relative max-w-[80%]">
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.content}
                </div>
                <div className="absolute right-0 top-0 hidden group-hover:flex items-center gap-1">
                  <button
                    onClick={() => copyToClipboard(message.content, message.id)}
                    className="p-1 rounded bg-background/80 hover:bg-background border border-border shadow-sm"
                    title="Copy message"
                  >
                    {copiedMessageId === message.id ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                  {message.type === 'ai' && onRegenerate && (
                    <button
                      onClick={onRegenerate}
                      className="p-1 rounded bg-background/80 hover:bg-background border border-border shadow-sm"
                      title="Regenerate response"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            className="flex items-center gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-sm">{persona?.name} is typing...</span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex gap-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            rows={1}
            className="flex-1 px-4 py-2 rounded-xl bg-background border border-primary/20 focus:outline-none focus:border-primary resize-none"
            style={{
              minHeight: '44px',
              maxHeight: '200px',
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Press Enter to send, Shift + Enter for new line
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
