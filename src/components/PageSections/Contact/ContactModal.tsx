import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';
import { Button } from '../../ui/Button/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Send} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Interested in a live demo? Send us a message and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Name"
              className="w-full"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
              required
            />
          </div>
          <div>
            <Input
              placeholder="Company (Optional)"
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              className="w-full min-h-[100px]"
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
