'use server';

/**
 * @fileOverview AI assistant for portfolio content suggestions.
 *
 * - portfolioContentSuggestions - A function that suggests improvements to portfolio content.
 * - PortfolioContentSuggestionsInput - The input type for the portfolioContentSuggestions function.
 * - PortfolioContentSuggestionsOutput - The return type for the portfolioContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioContentSuggestionsInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The current content of the portfolio.'),
  desiredField: z.string().describe('The field the user wants to work in.'),
  targetAudience: z.string().describe('The intended audience of the portfolio.'),
});
export type PortfolioContentSuggestionsInput = z.infer<
  typeof PortfolioContentSuggestionsInputSchema
>;

const PortfolioContentSuggestionsOutputSchema = z.object({
  suggestions:
    z.string().describe(
      'AI-generated suggestions to improve the portfolio content based on the desired field and target audience.'
    ),
});
export type PortfolioContentSuggestionsOutput = z.infer<
  typeof PortfolioContentSuggestionsOutputSchema
>;

export async function portfolioContentSuggestions(
  input: PortfolioContentSuggestionsInput
): Promise<PortfolioContentSuggestionsOutput> {
  return portfolioContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioContentSuggestionsPrompt',
  input: {schema: PortfolioContentSuggestionsInputSchema},
  output: {schema: PortfolioContentSuggestionsOutputSchema},
  prompt: `You are an AI assistant that reviews portfolio content and provides suggestions for improvement.

Given the following portfolio content, desired field, and target audience, provide specific and actionable suggestions to make the content more impactful and tailored to the user's goals.

Portfolio Content: {{{portfolioContent}}}
Desired Field: {{{desiredField}}}
Target Audience: {{{targetAudience}}}

Suggestions:
`,
});

const portfolioContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'portfolioContentSuggestionsFlow',
    inputSchema: PortfolioContentSuggestionsInputSchema,
    outputSchema: PortfolioContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
