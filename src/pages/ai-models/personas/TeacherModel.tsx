import { motion } from 'framer-motion';
import { GraduationCap, Send, User, BookOpen, Lightbulb, Atom } from 'lucide-react';
import { useState } from 'react';
import AIModelNav from '../../../components/AIModelNav';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const teachers = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    subject: 'Physics',
    description: 'Theoretical physicist who developed the theory of relativity',
    quote: 'Imagination is more important than knowledge.',
    style: 'Uses thought experiments and analogies to explain complex concepts.',
    icon: Atom
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    subject: 'Cosmology',
    description: 'Theoretical physicist known for his work on black holes',
    quote: 'Intelligence is the ability to adapt to change.',
    style: 'Breaks down complex cosmic concepts into understandable terms.',
    icon: GraduationCap
  },
  {
    id: 'feynman',
    name: 'Richard Feynman',
    subject: 'Quantum Physics',
    description: 'Known for his ability to explain complex physics simply',
    quote: 'If you can\'t explain it simply, you don\'t understand it well enough.',
    style: 'Uses simple analogies and diagrams to teach complex physics.',
    icon: Lightbulb
  }
];

const TeacherModel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);
  const [inputMessage, setInputMessage] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const handleSendMessage = (input: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    const selectedTeacherData = teachers.find(t => t.id === selectedTeacher.id);
    
    if (!selectedTeacherData) return;

    const teacherResponse: Message = {
      id: uuidv4(),
      type: 'ai',
      content: generateTeacherResponse(input, selectedTeacherData),
      timestamp: new Date()
    };

    setMessages(prevMessages => [...prevMessages, userMessage, teacherResponse]);
  };

  const generateTeacherResponse = (_input: string, teacher: typeof teachers[0]) => {
    // In a real application, this would connect to an AI service
    const responses = {
      'einstein': 'Let me explain this with a thought experiment...',
      'hawking': 'Consider the universe as a vast cosmic dance...',
      'feynman': 'Here\'s a simple way to understand this concept...'
    };

    return responses[teacher.id as keyof typeof responses] || 'I find your query intriguing.';
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
          Scientific Teacher Personas
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              className={`rounded-xl border p-6 cursor-pointer transition-all ${
                selectedTeacher.id === teacher.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedTeacher(teacher)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <teacher.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{teacher.subject}</p>
              <p className="text-sm text-muted-foreground mb-4">{teacher.description}</p>
              <blockquote className="text-sm italic border-l-2 border-primary/50 pl-4">
                "{teacher.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">
              Learning from {selectedTeacher.name}
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
                    <GraduationCap className="w-5 h-5 text-primary" />
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
                Ask your scientific question...
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Ask ${selectedTeacher.name} about ${selectedTeacher.subject.toLowerCase()}...`}
              className="flex-1 px-4 py-2 rounded-full bg-background border border-primary/20 focus:outline-none focus:border-primary"
            />
            <button 
              onClick={() => {
                if (inputMessage.trim()) {
                  handleSendMessage(inputMessage);
                  setInputMessage('');
                }
              }}
              className="bg-blue-500 text-white p-2 rounded-r-lg"
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

export default TeacherModel;
