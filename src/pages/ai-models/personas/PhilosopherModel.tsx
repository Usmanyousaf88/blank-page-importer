import { motion } from 'framer-motion';
import { Brain, Send, User, ScrollText, History } from 'lucide-react';
import { useState } from 'react';
import AIModelNav from '../../../components/AIModelNav';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const philosophers = [
  {
    id: 'socrates',
    name: 'Socrates',
    description: 'Greek philosopher known for the Socratic method',
    quote: 'I know that I know nothing.',
    style: 'Uses questioning to lead others to their own insights.',
  },
  {
    id: 'marcus-aurelius',
    name: 'Marcus Aurelius',
    description: 'Roman Emperor and Stoic philosopher',
    quote: 'The happiness of your life depends upon the quality of your thoughts.',
    style: 'Focuses on practical wisdom and self-discipline.',
  },
  {
    id: 'confucius',
    name: 'Confucius',
    description: 'Chinese philosopher and teacher',
    quote: 'By three methods we may learn wisdom: by reflection, by imitation, and by experience.',
    style: 'Emphasizes moral development and social harmony.',
  }
];

const PhilosopherModel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedPhilosopher, setSelectedPhilosopher] = useState(philosophers[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    const philosopherResponse: Message = {
      id: uuidv4(),
      type: 'ai',
      content: generatePhilosopherResponse(content, selectedPhilosopher),
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, philosopherResponse]);
  };

  const generatePhilosopherResponse = (_input: string, philosopher: typeof philosophers[0]) => {
    // In a real application, this would connect to an AI service
    const responses = {
      'socrates': 'And what leads you to believe this? Have you considered...',
      'marcus-aurelius': 'Consider how this affects your inner peace and virtue...',
      'confucius': 'In matters of wisdom and moral conduct...'
    };

    return responses[philosopher.id as keyof typeof responses] + 
           ' (This is a simulated response. In production, it would use a real AI service)';
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
          Philosophical AI Personas
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {philosophers.map((philosopher) => (
            <motion.div
              key={philosopher.id}
              className={`rounded-xl border p-6 cursor-pointer transition-all ${
                selectedPhilosopher.id === philosopher.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedPhilosopher(philosopher)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Brain className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{philosopher.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{philosopher.description}</p>
              <blockquote className="text-sm italic border-l-2 border-primary/50 pl-4">
                "{philosopher.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <History className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">
              Conversing with {selectedPhilosopher.name}
            </h2>
          </div>

          <div className="h-[400px] overflow-y-auto mb-6 space-y-4 p-4 rounded-xl bg-muted/50">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`p-2 rounded-full ${
                  message.type === 'user' ? 'bg-primary' : 'bg-primary/10'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <ScrollText className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  {message.content}
                </div>
              </motion.div>
            ))}
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-12">
                Begin your philosophical dialogue...
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder={`Ask ${selectedPhilosopher.name} a question...`}
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage((e.target as HTMLInputElement).value)}
              className="flex-1 px-4 py-2 rounded-full bg-background border border-primary/20 focus:outline-none focus:border-primary"
            />
            <button
              onClick={() => handleSendMessage('')}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <AIModelNav />
    </motion.div>
  );
};

export default PhilosopherModel;
