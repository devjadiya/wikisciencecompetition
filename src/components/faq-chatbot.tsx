
'use client';

import { useState, useRef, useEffect } from 'react';
import { faqChatbot, type FaqChatbotInput } from '@/ai/flows/faq-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Bot, User, Send, Loader2, MessageSquare, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const exampleQuestions = [
    { for: 'Student', question: 'How can I participate as a student?' },
    { for: 'Sponsor', question: 'What are the benefits of sponsoring this campaign?'},
    { for: 'Photographer', question: 'What are the image submission rules?'},
    { for: 'General', question: 'When will the winners be announced?'},
]

export default function FaqChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
    
    const userMessage: Message = { role: 'user', text: question };
    setMessages((prev) => [...prev, userMessage]);
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
    setInput('');
  };

  const handleExampleClick = (question: string) => {
      processQuestion(question);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-accent hover:bg-accent/90 shadow-2xl z-40 transition-transform hover:scale-110">
          <MessageSquare className="h-8 w-8 text-accent-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2 font-headline">
            <Bot className="h-6 w-6 text-primary" /> FAQ Chatbot
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <AnimatePresence>
            {messages.length === 0 && (
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-center"
                 >
                    <div className="p-4 bg-primary/10 rounded-full inline-block">
                        <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-lg">Ask me anything!</h3>
                    <p className="text-sm text-muted-foreground">Here are some examples to get you started:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                        {exampleQuestions.map((ex) => (
                            <button key={ex.question} onClick={() => handleExampleClick(ex.question)} className="p-3 bg-muted hover:bg-muted/80 rounded-lg text-sm transition-colors text-muted-foreground">
                                {ex.question}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
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
                        'rounded-lg px-4 py-2 max-w-[80%] text-sm',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      )}
                    >
                      {message.text}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted text-muted-foreground rounded-lg px-4 py-3 text-sm flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} size="icon">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
