// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI-powered FAQ chatbot for the Wiki Science Competition India 2025.
 *
 * - faqChatbot - A function that handles user questions and returns accurate answers.
 * - FaqChatbotInput - The input type for the faqChatbot function.
 * - FaqChatbotOutput - The return type for the faqChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqChatbotInputSchema = z.object({
  question: z.string().describe('The user question about the Wiki Science Competition India 2025.'),
});
export type FaqChatbotInput = z.infer<typeof FaqChatbotInputSchema>;

const FaqChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user question.'),
});
export type FaqChatbotOutput = z.infer<typeof FaqChatbotOutputSchema>;

export async function faqChatbot(input: FaqChatbotInput): Promise<FaqChatbotOutput> {
  return faqChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqChatbotPrompt',
  input: {schema: FaqChatbotInputSchema},
  output: {schema: FaqChatbotOutputSchema},
  prompt: `You are an AI-powered chatbot designed to answer questions about the Wiki Science Competition India 2025.\n\nUser Question: {{{question}}}\n\nAnswer:`,
});

const faqChatbotFlow = ai.defineFlow(
  {
    name: 'faqChatbotFlow',
    inputSchema: FaqChatbotInputSchema,
    outputSchema: FaqChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
