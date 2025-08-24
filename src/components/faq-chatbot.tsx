
'use client';

import { useState, useRef, useEffect } from 'react';
import { faqChatbot, type FaqChatbotInput } from '@/ai/flows/faq-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Bot, User, Send, Loader2, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { gtagEvent } from '@/lib/gtm';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const exampleQuestions = [
    { for: 'General', question: 'What is this competition about?' },
    { for: 'Participant', question: 'How do I submit a photo?'},
    { for: 'Rules', question: 'What kind of photos can I enter?'},
    { for: 'Prizes', question: 'How do I win a prize?'},
]

export default function FaqChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  
  const processQuestion = async (question: string) => {
    if (isLoading) return;
    
    gtagEvent({ action: 'submit_question', category: 'FAQ Chatbot', label: question });
    
    const userMessage: Message = { role: 'user', text: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatbotInput: FaqChatbotInput = { question };
      const result = await faqChatbot(chatbotInput);
      const botMessage: Message = { role: 'bot', text: result.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'bot',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    processQuestion(input);
  };

  const handleExampleClick = (question: string) => {
      gtagEvent({ action: 'click_example_question', category: 'FAQ Chatbot', label: question });
      processQuestion(question);
  };

  const handleOpenChange = (open: boolean) => {
    if (open && !isOpen) {
        gtagEvent({ action: 'open_modal', category: 'FAQ Chatbot', label: 'FAQ Chatbot Opened' });
    }
    setIsOpen(open);
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button className="h-16 w-16 rounded-full bg-accent hover:bg-accent/90 shadow-2xl">
            <Sparkles className="h-8 w-8 text-accent-foreground" />
          </Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0 w-full sm:max-w-md bg-background/80 backdrop-blur-lg">
        <SheetHeader className="p-4 border-b border-border/50">
          <SheetTitle className="flex items-center gap-3 font-headline text-lg">
            <Avatar className="h-9 w-9 border-2 border-primary/50">
                <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                </AvatarFallback>
            </Avatar> 
            <div>
              <p>FAQ Chatbot</p>
              <p className="text-xs font-normal text-muted-foreground">Your guide to the Wiki Science Competition</p>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col min-h-0">
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="p-4 space-y-6">
            <AnimatePresence>
            {messages.length === 0 && (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-6 text-center pt-8"
                 >
                    <div className="p-4 bg-primary/10 rounded-full inline-block">
                        <Sparkles className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl">Ask me anything!</h3>
                    <p className="text-sm text-muted-foreground">Here are some examples to get you started:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                        {exampleQuestions.map((ex) => (
                            <motion.button 
                              key={ex.question} 
                              onClick={() => handleExampleClick(ex.question)} 
                              className="p-3 bg-muted hover:bg-muted/80 rounded-lg text-sm transition-colors text-muted-foreground"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                                {ex.question}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : '')}
                  >
                    {message.role === 'bot' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'rounded-xl px-4 py-3 max-w-[85%] text-sm shadow-md border',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground border-primary/50'
                          : 'bg-card text-card-foreground border-border/50'
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                     {message.role === 'user' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                ))}
                {isLoading && messages.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-start gap-3"
                  >
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted text-muted-foreground rounded-lg px-4 py-3 text-sm flex items-center shadow-md border border-border/50">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>
          <div className="p-4 border-t border-border/50">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="flex-1 h-11"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} size="icon" className="h-11 w-11">
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

    