import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Target, Zap } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';
import { Button } from '../ui/Button/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useForm } from 'react-hook-form';
import { useToast } from '../ui/Toast/use-toast';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  { value: 'portfolio', label: 'Portfolio Website' },
  { value: 'ecommerce', label: 'E-commerce Platform' },
  { value: 'blog', label: 'Blog Platform' },
  { value: 'restaurant', label: 'Restaurant Website' },
  { value: 'realestate', label: 'Real Estate Platform' },
  { value: 'saas', label: 'SaaS Dashboard' },
  { value: 'social', label: 'Social Network' },
  { value: 'education', label: 'Educational Platform' },
  { value: 'healthcare', label: 'Healthcare Solution' },
  { value: 'custom', label: 'Custom Project' }
];

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const mailtoLink = `mailto:chris.june@intellisync.ca?subject=${encodeURIComponent("Contact Form Submission")}&body=${encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Project Type: ${data.projectType}\n\n` +
        `Message:\n${data.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your message has been prepared in your default email client.",
      });
      
      onClose();
    } catch  {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open email client. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-background w-full max-w-4xl mx-4 rounded-2xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <BorderTrail 
              className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
              size={120}
            />
            <div className="p-8 relative z-10">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                  <Send className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start Your Project
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                Transform your vision into a digital masterpiece. Let's collaborate and bring your ideas to life.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" /> 
                    Our Collaborative Approach
                  </h3>
                  <p className="text-muted-foreground">
                    We believe in a personalized, iterative process that turns your unique ideas into extraordinary digital experiences. Your vision, our expertise.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" /> 
                    Project Transformation Principles
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Tailored Solutions",
                      "Cutting-Edge Technology",
                      "User-Centric Design",
                      "Continuous Innovation"
                    ].map((benefit, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8 border-t border-border pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Chris June"
                      className="w-full"
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="chris.june@intellisync.ca" 
                      className="w-full"
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select onValueChange={(value) => setValue('projectType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell me about your project idea, goals, and any specific features you'd like. The more details, the better!"
                    className="w-full min-h-[120px]"
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500">{errors.message.message}</span>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
