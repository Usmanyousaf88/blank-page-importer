import { motion } from 'framer-motion';
import { Feather, Pen, Scroll } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AIModelNav from '../../../components/AIModelNav';
import ChatInterface, { Message } from '../../../components/chat/ChatInterface';

const authors = [
  {
    id: 'shakespeare',
    name: 'William Shakespeare',
    era: 'Elizabethan Era',
    description: 'English playwright, poet, and actor',
    quote: 'All the world\'s a stage, and all the men and women merely players.',
    works: [
      'Hamlet',
      'Romeo and Juliet',
      'Macbeth'
    ],
    style: 'Poetic, dramatic, rich in metaphor',
    icon: Feather
  },
  {
    id: 'austen',
    name: 'Jane Austen',
    era: 'Regency Era',
    description: 'English novelist known for romantic fiction',
    quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    works: [
      'Pride and Prejudice',
      'Emma',
      'Sense and Sensibility'
    ],
    style: 'Witty, satirical, social commentary',
    icon: Pen
  },
  {
    id: 'wilde',
    name: 'Oscar Wilde',
    era: 'Victorian Era',
    description: 'Irish poet, playwright, and novelist',
    quote: 'Be yourself; everyone else is already taken.',
    works: [
      'The Picture of Dorian Gray',
      'The Importance of Being Earnest',
      'Lady Windermere\'s Fan'
    ],
    style: 'Witty, satirical, aestheticism',
    icon: Scroll
  }
];

const LiteraryModel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState(authors[0]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    const authorResponse: Message = {
      id: uuidv4(),
      type: 'ai',
      content: generateAuthorResponse(content, selectedAuthor),
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, authorResponse]);
  };

  const generateAuthorResponse = (_input: string, author: typeof authors[0]) => {
    // In a real application, this would connect to an AI service
    const responses = {
      'shakespeare': 'Prithee, let me speak on this matter...',
      'austen': 'In matters of society and romance...',
      'wilde': 'With characteristic wit, I must say...'
    };

    return responses[author.id as keyof typeof responses] + 
           ' (This is a simulated response. In production, it would use a real AI service)';
  };

  const handleRegenerate = () => {
    if (messages.length >= 2) {
      const newResponse: Message = {
        id: uuidv4(),
        type: 'ai',
        content: generateAuthorResponse(messages[messages.length - 2].content, selectedAuthor),
        timestamp: new Date()
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
          Literary Author Personas
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {authors.map((author) => (
            <motion.div
              key={author.id}
              className={`rounded-xl border p-6 cursor-pointer transition-all ${
                selectedAuthor.id === author.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedAuthor(author)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <author.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{author.name}</h3>
                  <p className="text-sm text-primary mb-2">{author.era}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {author.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Notable Works:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {author.works.map((work) => (
                        <li key={work} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-3 text-sm">
                    <span className="font-medium">Writing Style: </span>
                    <span className="text-muted-foreground">{author.style}</span>
                  </p>
                  <blockquote className="mt-4 text-sm italic border-l-2 border-primary/50 pl-4">
                    "{author.quote}"
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
          placeholder={`Ask ${selectedAuthor.name} about their works, style, or literary perspectives...`}
          persona={{
            name: selectedAuthor.name,
            icon: selectedAuthor.icon
          }}
        />
      </div>
      <AIModelNav />
    </motion.div>
  );
};

export default LiteraryModel;
