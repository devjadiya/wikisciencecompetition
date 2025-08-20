'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // In a real application, you would integrate an email service here.
  // For this example, we'll just log the data to the console.
  console.log('Contact form submitted:');
  console.log(parsed.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
