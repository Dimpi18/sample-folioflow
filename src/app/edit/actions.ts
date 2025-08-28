"use server";

import { portfolioContentSuggestions } from "@/ai/flows/portfolio-content-suggestions";
import { z } from "zod";

const SuggestionSchema = z.object({
  portfolioContent: z.string(),
  desiredField: z.string(),
  targetAudience: z.string(),
});

export async function getSuggestions(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validatedFields = SuggestionSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: "Invalid data provided.",
      suggestions: null,
    };
  }

  try {
    const result = await portfolioContentSuggestions(validatedFields.data);
    return {
      error: null,
      suggestions: result.suggestions,
    };
  } catch (error) {
    console.error("Error getting AI suggestions:", error);
    return {
      error: "An unexpected error occurred. Please try again.",
      suggestions: null,
    };
  }
}
