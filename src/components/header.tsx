import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-card/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <Icons.logo className="h-6 w-6 text-primary" />
        <span className="sr-only">FolioFlow</span>
        <span className="font-semibold text-lg">FolioFlow</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button asChild variant="ghost">
          <Link href="/edit">Editor</Link>
        </Button>
        <Button asChild>
          <Link href="/preview">Preview</Link>
        </Button>
      </nav>
    </header>
  );
}
