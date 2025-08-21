
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { handleContactForm } from './actions';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const subjects = [
    'General Inquiry about the Competition',
    'Question about Participation Rules',
    'Image Submission Guidelines',
    'Video/Audio Submission Guidelines',
    'Image Category Clarification',
    'Technical Issue with Uploading',
    'Sponsorship Opportunities',
    'Becoming a Partner/Affiliate',
    'Campus Ambassador Program Inquiry',
    'Jury & Judging Process',
    'Prizes and Awards Information',
    'Media or Press Inquiry',
    'Licensing and Copyright Question',
    'Website Feedback or Bug Report',
    'Request for a Workshop/Session',
    'Volunteering or Joining the Team',
    'Question about Past Competitions',
    'Data Privacy Concern',
    'How to use Wikimedia Commons',
    'Other...',
];

const messageTemplates: Record<string, string[]> = {
    'General Inquiry about the Competition': [
        'Could you please provide more details about the competition?',
        'I have a general question about the event timeline.',
        'Who is eligible to participate in this competition?',
        'Other...',
    ],
    'Question about Participation Rules': [
        'Can I submit a photo that has been previously published?',
        'What are the licensing requirements for submissions?',
        'Are there any restrictions on photo editing or manipulation?',
        'Other...',
    ],
    'Image Submission Guidelines': [
        'What is the minimum/maximum resolution for image submissions?',
        'What file formats are accepted for images?',
        'How do I add categories and descriptions to my submission?',
        'Other...',
    ],
    'Video/Audio Submission Guidelines': [
        'What are the accepted formats and duration for video submissions?',
        'Are there specific guidelines for audio quality?',
        'Other...',
    ],
    'Image Category Clarification': [
        'I am unsure which category my image fits into. Can you help?',
        'What is the difference between "Wildlife & Nature" and "General Category"?',
        'Other...',
    ],
    'Technical Issue with Uploading': [
        'I am facing an error while using the Upload Wizard.',
        'My submission is not appearing after upload. What should I do?',
        'Other...',
    ],
    'Sponsorship Opportunities': [
        'I am interested in sponsoring the event. Could you share the sponsorship deck?',
        'What benefits do sponsors receive?',
        'Other...',
    ],
    'Becoming a Partner/Affiliate': [
        'Our organization would like to partner with you. What are the next steps?',
        'What is expected of a partner organization?',
        'Other...',
    ],
    'Campus Ambassador Program Inquiry': [
        'What are the responsibilities of a Campus Ambassador?',
        'I have applied for the Campus Ambassador program. When can I expect a response?',
        'Other...',
    ],
    'Jury & Judging Process': [
        'How will the images be judged?',
        'When will the jury members be announced?',
        'Other...',
    ],
    'Prizes and Awards Information': [
        'What are the prizes for the national winners?',
        'Will there be prizes for each category?',
        'Other...',
    ],
    'Media or Press Inquiry': [
        'I would like to feature the competition in our publication.',
        'Could you provide a press kit or contact for media inquiries?',
        'Other...',
    ],
    'Licensing and Copyright Question': [
        'I have a question about the Creative Commons licenses.',
        'Who retains the copyright of the submitted images?',
        'Other...',
    ],
    'Website Feedback or Bug Report': [
        'I found a bug on the website I would like to report.',
        'I have some feedback to improve the website user experience.',
        'Other...',
    ],
    'Request for a Workshop/Session': [
        'Our institution would like to request a workshop on science photography.',
        'Are you available to conduct an online session about the competition?',
        'Other...',
    ],
    'Volunteering or Joining the Team': [
        'I am interested in volunteering for the organizing team.',
        'Are there any open positions in the core team?',
        'Other...',
    ],
    'Question about Past Competitions': [
        'Where can I view the winners from previous international competitions?',
        'Other...',
    ],
    'Data Privacy Concern': [
        'How is my personal data handled by the competition?',
        'Other...',
    ],
    'How to use Wikimedia Commons': [
        'I am new to Wikimedia Commons and need some guidance.',
        'Where can I find tutorials on using Wikimedia Commons?',
        'Other...',
    ],
    'Other...': [
        'I have a question that is not listed. Please specify below.',
        'Other...'
    ]
};

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string({ required_error: 'Please select a subject.' }).min(1, 'Please select a subject.'),
  otherSubject: z.string().optional(),
  message: z.string({ required_error: 'Please select a message.' }).min(1, 'Please select a message.'),
  otherMessage: z.string().optional(),
}).refine(data => {
    if (data.subject === 'Other...' && !data.otherSubject?.trim()) {
        return false;
    }
    return true;
}, {
    message: 'Please specify your subject.',
    path: ['otherSubject'],
}).refine(data => {
    if (data.message === 'Other...' && !data.otherMessage?.trim()) {
        return false;
    }
    return true;
}, {
    message: 'Please specify your message.',
    path: ['otherMessage'],
});


export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', otherSubject: '', message: '', otherMessage: '' },
  });

  const watchSubject = form.watch('subject');
  const watchMessage = form.watch('message');

  const showOtherSubject = watchSubject === 'Other...';
  const showOtherMessage = watchMessage === 'Other...';

  const handleSubjectChange = (value: string) => {
      form.setValue('subject', value);
      form.setValue('otherSubject', '');
      form.setValue('otherMessage', '');
      form.clearErrors('message');
      
      if (value === 'Other...') {
        form.setValue('message', 'Other...');
      } else {
        form.setValue('message', '');
      }
  }
  
  const handleMessageChange = (value: string) => {
      form.setValue('message', value);
      form.setValue('otherMessage', '');
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const finalValues = {
        name: values.name,
        email: values.email,
        subject: values.subject === 'Other...' ? values.otherSubject! : values.subject,
        message: values.message === 'Other...' ? values.otherMessage! : values.message,
    };
    
    const result = await handleContactForm(finalValues);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you shortly.',
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="bg-background text-foreground">
        <motion.div 
            className="bg-primary/5 py-16 md:py-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Contact Us</h1>
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                    Have questions or feedback? We&apos;d love to hear from you. We promise a quick reply!
                </p>
            </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">Get in Touch</h2>
                        <p className="text-muted-foreground text-sm md:text-base">
                           Fill out the form and our team will get back to you within a few hours. We&apos;re here to help!
                        </p>
                    </div>
                    <div className="space-y-4 text-sm md:text-base">
                        <div className="flex items-center gap-4">
                            <Mail className="h-5 w-5 text-accent" />
                            <a href="mailto:wikisciencecompetition@gmail.com" className="text-muted-foreground hover:text-primary">wikisciencecompetition@gmail.com</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select onValueChange={handleSubjectChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a subject for your query" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {subjects.map((subject) => (
                                    <SelectItem key={subject} value={subject}>
                                      {subject}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {showOtherSubject && (
                            <FormField
                                control={form.control}
                                name="otherSubject"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Please specify your subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your custom subject" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <Select onValueChange={handleMessageChange} value={field.value} disabled={!watchSubject}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={watchSubject ? "Select a pre-written message or 'Other...'" : "Please select a subject first"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {watchSubject && messageTemplates[watchSubject] ? (
                                    messageTemplates[watchSubject].map((msg) => (
                                      <SelectItem key={msg} value={msg}>
                                        {msg}
                                      </SelectItem>
                                    ))
                                  ) : (
                                    <SelectItem value="-" disabled>No messages available</SelectItem>
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {showOtherMessage && (
                            <FormField
                                control={form.control}
                                name="otherMessage"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Please specify your message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your custom message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                    </Form>
                </motion.div>
            </div>
        </div>
    </div>
  );
}

    