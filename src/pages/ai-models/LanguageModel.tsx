import { motion } from 'framer-motion';
import { MessageSquare, Send, User, Bot } from 'lucide-react';
import { useState } from 'react';
import AIModelNav from '../../components/AIModelNav';

const LanguageModel = () => {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: string }>>([
    { type: 'bot', content: 'Hello! I\'m your AI language assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'I understand your message. As an AI language model, I can help you with various tasks like writing, analysis, and answering questions.' 
      }]);
    }, 1000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Language Model Demo
        </h1>
        <div className="rounded-2xl border border-border bg-card p-8">
          <motion.div className="mb-8 text-center" variants={itemVariants}>
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Language Model</h1>
            <p className="text-xl text-muted-foreground">
              Experience natural language understanding and generation in real-time.
            </p>
          </motion.div>

          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 overflow-hidden"
            variants={itemVariants}
          >
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-primary' : 'bg-primary/10'}`}>
                    {message.type === 'user' ? (
                      <User className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <Bot className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div 
                    className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-primary/10">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full bg-background border border-primary/20 focus:outline-none focus:border-primary"
                />
                <button
                  onClick={handleSend}
                  className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <AIModelNav />
    </motion.div>
  );
};

export default LanguageModel;
