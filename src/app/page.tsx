import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  Brush,
  Zap,
  Share2,
  FileDown,
  LayoutTemplate,
  Construction,
} from 'lucide-react';

const features = [
  {
    icon: <Construction className="size-8 text-primary" />,
    title: 'Drag-and-Drop Builder',
    description: 'Effortlessly design your portfolio with our intuitive, no-code interface.',
    href: '/edit',
  },
  {
    icon: <LayoutTemplate className="size-8 text-primary" />,
    title: 'Stunning Templates',
    description: 'Choose from a variety of professionally designed templates to get started fast.',
    href: '/edit#templates',
  },
  {
    icon: <Zap className="size-8 text-primary" />,
    title: 'AI Content Assistant',
    description: 'Get AI-powered suggestions to make your portfolio content shine.',
    href: '/edit#ai-assistant',
  },
  {
    icon: <Share2 className="size-8 text-primary" />,
    title: 'One-Click Hosting',
    description: 'Publish your portfolio to the world with a single click. No hosting fees.',
    href: '/preview',
  },
  {
    icon: <FileDown className="size-8 text-primary" />,
    title: 'PDF Export',
    description: 'Download a high-quality PDF of your portfolio for offline applications.',
    href: '/preview',
  },
  {
    icon: <Brush className="size-8 text-primary" />,
    title: 'Easy Customization',
    description: 'Tailor every detail to match your personal brand and style.',
    href: '/edit',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Create Your Digital Portfolio in Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    FolioFlow is a no-code platform for students to build and share professional portfolios, supercharged by AI.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/edit">Get Started for Free</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/1200/800"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="portfolio builder interface"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Everything You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides powerful tools to help you build a portfolio that stands out and gets you noticed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {features.map((feature, index) => (
                <Link href={feature.href} key={index} className="block h-full">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {feature.icon}
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
