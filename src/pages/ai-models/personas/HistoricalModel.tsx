import { motion } from 'framer-motion';
import { Sword, Crown, Scroll, Scale } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AIModelNav from '../../../components/AIModelNav';
import ChatInterface, { Message } from '../../../components/chat/ChatInterface';

const historicalFigures = [
  {
    id: 'cleopatra',
    name: 'Cleopatra VII',
    era: 'Ancient Egypt',
    description: 'Last active ruler of the Ptolemaic Kingdom of Egypt',
    quote: 'I will not be triumphed over.',
    achievements: [
      'United Egypt and Rome',
      'Skilled diplomat',
      'Patron of sciences'
    ],
    icon: Crown
  },
  {
    id: 'leonardo',
    name: 'Leonardo da Vinci',
    era: 'Renaissance',
    description: 'Polymath, artist, inventor, and scientist',
    quote: 'Learning never exhausts the mind.',
    achievements: [
      'Mona Lisa',
      'Vitruvian Man',
      'Flying machine designs'
    ],
    icon: Scroll
  },
  {
    id: 'napoleon',
    name: 'Napoleon Bonaparte',
    era: 'French Revolution',
    description: 'Military commander and Emperor of France',
    quote: 'Impossible is a word to be found only in the dictionary of fools.',
    achievements: [
      'Napoleonic Code',
      'Military reforms',
      'European conquest'
    ],
    icon: Sword
  },
  {
    id: 'lincoln',
    name: 'Abraham Lincoln',
    era: 'American Civil War',
    description: '16th President of the United States',
    quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
    achievements: [
      'Emancipation Proclamation',
      'Preserved the Union',
      'Gettysburg Address'
    ],
    icon: Scale
  }
];

const HistoricalModel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedFigure, setSelectedFigure] = useState(historicalFigures[0]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      type: 'user',
      content,
      timestamp: new Date(),
      persona: {
        name: selectedFigure.name,
        icon: selectedFigure.icon
      }
    };

    const figureResponse: Message = {
      id: uuidv4(),
      type: 'ai',
      content: generateHistoricalResponse(content, selectedFigure),
      timestamp: new Date(),
      persona: {
        name: selectedFigure.name,
        icon: selectedFigure.icon
      }
    };

    setMessages([...messages, userMessage, figureResponse]);
  };

  const generateHistoricalResponse = (_input: string, figure: typeof historicalFigures[0]) => {
    // In a real application, this would connect to an AI service
    const responses = {
      'cleopatra': 'As ruler of Egypt, I must say...',
      'leonardo': 'Through observation and experimentation, I have found...',
      'napoleon': 'In matters of strategy and leadership...',
      'lincoln': 'Let us consider this matter with malice toward none...'
    };

    return responses[figure.id as keyof typeof responses] + 
           ' (This is a simulated response. In production, it would use a real AI service)';
  };

  const handleRegenerate = () => {
    if (messages.length >= 2) {
      const newResponse: Message = {
        id: uuidv4(),
        type: 'ai',
        content: generateHistoricalResponse(messages[messages.length - 2].content, selectedFigure),
        timestamp: new Date(),
        persona: {
          name: selectedFigure.name,
          icon: selectedFigure.icon
        }
      };
      setMessages([...messages.slice(0, -1), newResponse]);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Historical Figure Personas
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {historicalFigures.map((figure) => (
            <motion.div
              key={figure.id}
              className={`rounded-xl border p-6 cursor-pointer transition-all ${
                selectedFigure.id === figure.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedFigure(figure)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <figure.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{figure.name}</h3>
                  <p className="text-sm text-primary mb-2">{figure.era}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {figure.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Achievements:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {figure.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <blockquote className="mt-4 text-sm italic border-l-2 border-primary/50 pl-4">
                    "{figure.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ChatInterface
          messages={messages}
          onSendMessage={handleSendMessage}
          onRegenerate={handleRegenerate}
          onClear={handleClear}
          placeholder={`Ask ${selectedFigure.name} about their era, achievements, or decisions...`}
          persona={{
            name: selectedFigure.name,
            icon: selectedFigure.icon
          }}
        />
      </div>
      <AIModelNav />
    </motion.div>
  );
};

export default HistoricalModel;
