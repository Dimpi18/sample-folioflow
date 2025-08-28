"use client";

import { usePortfolioStore } from '@/hooks/use-portfolio-store';
import { PortfolioPreview } from '@/components/portfolio-preview';
import { Skeleton } from '@/components/ui/skeleton';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { FileDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PreviewPage() {
  const { portfolioData, isInitialized } = usePortfolioStore();

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
        <Button onClick={handlePrint} size="icon">
          <FileDown className="h-4 w-4" />
          <span className="sr-only">Export to PDF</span>
        </Button>
      </div>
      <PortfolioPreview data={portfolioData} />
    </>
  );
}
