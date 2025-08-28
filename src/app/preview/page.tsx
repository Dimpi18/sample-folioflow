"use client";

import { usePortfolioStore } from '@/hooks/use-portfolio-store';
import { PortfolioPreview } from '@/components/portfolio-preview';
import { Skeleton } from '@/components/ui/skeleton';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { FileDown, ArrowLeft, Palette, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { themes } from '@/lib/themes';
import { cn } from '@/lib/utils';


function ThemeSelector() {
  const { theme, setTheme } = usePortfolioStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Choose Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[320px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Appearance</SheetTitle>
          <SheetDescription>
            Choose a color theme for your portfolio.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 py-8">
            {themes.map((t) => (
                <div key={t.id} className="space-y-2">
                    <button
                        onClick={() => setTheme(t.id)}
                        className={cn("w-full rounded-lg border-2 p-1 transition-all", theme === t.id ? "border-primary" : "border-transparent hover:border-primary/50")}
                    >
                        <div className="flex gap-1">
                            <div className="h-10 w-1/2 rounded" style={{ backgroundColor: `hsl(${t.light.primary})` }}></div>
                            <div className="h-10 w-1/2 rounded" style={{ backgroundColor: `hsl(${t.light.background})` }}></div>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div className="h-10 w-1/2 rounded" style={{ backgroundColor: `hsl(${t.dark.primary})` }}></div>
                            <div className="h-10 w-1/2 rounded" style={{ backgroundColor: `hsl(${t.dark.background})` }}></div>
                        </div>
                    </button>
                    <p className="text-sm font-medium text-center flex items-center justify-center gap-2">
                        {t.name}
                        {theme === t.id && <CheckCircle className="size-4 text-primary" />}
                    </p>
                </div>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}


export default function PreviewPage() {
  const { portfolioData, isInitialized, theme, applyTheme } = usePortfolioStore();

  useEffect(() => {
    applyTheme();
  }, [theme, applyTheme]);


  const handlePrint = () => {
    window.print();
  };

  if (!isInitialized || !portfolioData) {
    return (
      <div>
        <Header />
        <div className="container mx-auto p-8">
          <Skeleton className="h-48 w-full mb-8" />
          <Skeleton className="h-12 w-1/2 mb-4" />
          <Skeleton className="h-32 w-full mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 print:hidden">
         <Button asChild variant="outline" size="icon">
          <Link href="/edit">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Editor</span>
          </Link>
        </Button>
        <ThemeSelector />
        <Button onClick={handlePrint} size="icon">
          <FileDown className="h-4 w-4" />
          <span className="sr-only">Export to PDF</span>
        </Button>
      </div>
      <div className="bg-background">
        <PortfolioPreview data={portfolioData} />
      </div>
    </>
  );
}
