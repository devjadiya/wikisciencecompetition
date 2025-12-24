
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
import { useLanguage } from '@/context/language-context';
import { gtagEvent } from '@/lib/gtm';

const subjects = [
    'General Inquiry about the Competition',
    'Question about Participation Rules',
    'Image Submission Guidelines',
    'Video/Audio Submission Guidelines',
    'Image Category Clarification',
    'Technical Issue with Uploading',
    'Sponsorship Opportunities',
    'Jury & Judging Process',
    'Prizes and Awards Information',
    'Media or Press Inquiry',
    'Licensing and Copyright Question',
    'Website Feedback or Bug Report',
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
  const { t } = useLanguage();
  
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
      gtagEvent({
        action: 'submit_form',
        category: 'Contact',
        label: finalValues.subject,
      });
      toast({
        title: t.contact.toast.successTitle,
        description: t.contact.toast.successDescription,
      });
      form.reset();
    } else {
      toast({
        title: t.contact.toast.errorTitle,
        description: result.message || t.contact.toast.errorDescription,
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
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{t.contact.title}</h1>
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                    {t.contact.subtitle}
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
                        <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">{t.contact.getInTouch}</h2>
                        <p className="text-muted-foreground text-sm md:text-base">
                           {t.contact.p1}
                        </p>
                    </div>
                    <div className="space-y-4 text-sm md:text-base">
                        <div className="flex items-center gap-4">
                            <Mail className="h-5 w-5 text-accent" />
                                             <p><strong> Mail: contact [at] wikisciencecompetition [dot] in </strong></p>
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
                            <FormLabel>{t.contact.form.name}</FormLabel>
                            <FormControl>
                                <Input placeholder={t.contact.form.namePlaceholder} {...field} />
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
                            <FormLabel>{t.contact.form.email}</FormLabel>
                            <FormControl>
                                <Input placeholder={t.contact.form.emailPlaceholder} {...field} />
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
                              <FormLabel>{t.contact.form.subject}</FormLabel>
                              <Select onValueChange={handleSubjectChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={t.contact.form.subjectPlaceholder} />
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
                                    <FormLabel>{t.contact.form.otherSubjectPlaceholder}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t.contact.form.otherSubjectPlaceholder} {...field} />
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
                              <FormLabel>{t.contact.form.message}</FormLabel>
                              <Select onValueChange={handleMessageChange} value={field.value} disabled={!watchSubject}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={watchSubject ? t.contact.form.messagePlaceholder : t.contact.form.selectSubjectFirst} />
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
                                    <FormLabel>{t.contact.form.otherMessagePlaceholder}</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder={t.contact.form.otherMessagePlaceholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                        </Button>
                    </form>
                    </Form>
                </motion.div>
            </div>
        </div>
    </div>
  );
}
