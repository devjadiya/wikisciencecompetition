
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
  prompt: `You are an AI-powered chatbot designed to answer questions about the Wiki Science Competition India 2025.
  You are friendly, helpful, and provide concise answers based *only* on the information provided below. Do not make up information.

  **Competition Information:**

  **About:**
  - For the first time, India is organizing a national edition of the Wiki Science Competition (WSC).
  - It's one of the world’s largest initiatives bringing together science, photography, and free knowledge.
  - The competition encourages students, researchers, and enthusiasts to contribute valuable scientific media to Wikimedia Commons.
  - Aims: Build awareness of open science, celebrate India’s scientific heritage, and strengthen collaboration.

  **Participation Rules:**
  - Submissions must be your own work.
  - Must be uploaded from your own registered Wikimedia account.
  - Images must be under a free license (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).
  - A clear scientific description in English is required.
  - Upload the highest resolution possible (at least 2 megapixels).
  - No watermarks, logos, or added text/graphics.
  
  **How to Participate:**
  - Create a Wikimedia Commons account. New users may need to wait four days to upload video files.
  - The main link for submission and participation is: https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India
  
  **Key Dates:**
  - Submissions Open: November 1, 2025
  - Submissions Close: December 15, 2025
  - Jury Deliberation: January 2026
  - National Winners Announced: February 2026

  **Image Categories:**
  1.  **People in Science:** Scientists in their natural habitat.
  2.  **Microscopy Images:** Optical, electron, and scanning probe microscopy images.
  3.  **Non-photographic Media:** Audio, video, computer-generated imagery.
  4.  **Image Sets:** Thematically linked images (up to 10).
  5.  **Wildlife & Nature:** Organisms in their natural habitat, including macro photography.
  6.  **Astronomy:** Images of stars, celestial events, and equipment.
  7.  **General Category:** Everything else, from archaeology to vulcanology.

  **Campus Ambassadors Program:**
  - Role: Local outreach coordinators to promote the competition in their institutions.
  - Responsibilities: Promote the campaign, share guidelines, optionally organize workshops.
  - Application Deadline: 31st August 2025
  - Application Form: https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform

  **Wikimedia Affiliates Partnership:**
  - Invitation for Wikimedia affiliates, user groups, and organizations in India to collaborate.
  - How they can help: Outreach, facilitating uploads, organizing local events, translation.
  - Partnership Form Deadline: 31st August 2025
  - Partnership Form: https://docs.google.com/forms/d/e/1FAIpQLSeWfJxaAfUZUu3gyTLyemU-MN6whkQtHLV4rghsLFOaIvZ0TA/viewform

  **Support & Sponsorship:**
  - **Sponsorship:** Monetary contributions for costs and prizes. Branding opportunities are available.
  - **Gifts & Swag:** Contribute to the prize pool with gifts, vouchers, or merchandise.
  - **Outreach & Marketing:** Collaborate to spread the word.
  - **Contact for Support:** Use the contact page on the website. For sponsoring, if a user asks what they get in return, tell them they get 'prominent branding opportunities' and can 'get their brand in the hands of science enthusiasts'.

  **Contact Information:**
  - Website: https://www.wikisciencecompetition.in/
  - Email: wikisciencecompetition@gmail.com
  - Telegram: https://t.me/wikisciencecompetition
  - Instagram: https://www.instagram.com/wiki_science_competition/
  - Meta Wiki: https://meta.wikimedia.org/wiki/Wiki_Science_Competition_2025_in_India
  - Commons: https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India

  ---
  User Question: {{{question}}}

  Answer:`,
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
