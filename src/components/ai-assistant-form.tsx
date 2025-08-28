"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useFormState, useFormStatus } from "react-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/hooks/use-portfolio-store";
import { getSuggestions } from "@/app/edit/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Zap, Loader2 } from "lucide-react";

const formSchema = z.object({
  desiredField: z.string().min(2, "Please enter a valid field."),
  targetAudience: z.string().min(2, "Please enter a valid audience."),
});

type FormValues = z.infer<typeof formSchema>;

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
            Get Suggestions
        </Button>
    )
}

export function AiAssistantForm() {
  const { portfolioData } = usePortfolioStore();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(getSuggestions, {
    error: null,
    suggestions: null,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desiredField: "Software Engineering",
      targetAudience: "Recruiters and Hiring Managers",
    },
  });

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: state.error,
      });
    }
  }, [state.error, toast]);


  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Portfolio Assistant</CardTitle>
        <CardDescription>
          Get AI-powered suggestions to improve your portfolio content based on
          your career goals.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-4">
          <input type="hidden" name="portfolioContent" value={JSON.stringify(portfolioData)} />
          <div className="space-y-2">
            <Label htmlFor="desiredField">Desired Field</Label>
            <Input
              id="desiredField"
              name="desiredField"
              placeholder="e.g., UI/UX Design, Data Science"
              defaultValue={form.getValues('desiredField')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input
              id="targetAudience"
              name="targetAudience"
              placeholder="e.g., Tech Recruiters, Startup Founders"
              defaultValue={form.getValues('targetAudience')}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
            <SubmitButton />
        </CardFooter>
      </form>
      {state.suggestions && (
        <CardContent>
             <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-primary" />
                    AI Suggestions
                </h3>
                <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                    <p>{state.suggestions}</p>
                </div>
            </div>
        </CardContent>
      )}
    </Card>
  );
}
