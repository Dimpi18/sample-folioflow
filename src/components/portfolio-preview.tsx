import type { PortfolioData } from '@/types/portfolio';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Separator } from './ui/separator';

export function PortfolioPreview({ data }: { data: PortfolioData }) {
  const { personalInfo, projects, skills } = data;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 md:p-12 bg-card font-body antialiased">
      <main className="space-y-16">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Image
            src={personalInfo.profilePictureUrl || 'https://picsum.photos/400/400'}
            alt={personalInfo.name}
            width={160}
            height={160}
            className="rounded-full object-cover size-40 shadow-lg"
            data-ai-hint="profile picture"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-muted-foreground">
              {personalInfo.headline}
            </p>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <Button asChild variant="ghost" size="icon">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="size-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="size-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.bio}
          </p>
        </section>

        <Separator />

        {/* Skills Section */}
        <section id="skills" className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill.id} variant="secondary" className="text-sm px-3 py-1">
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-bold font-headline">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={project.imageUrl || 'https://picsum.photos/600/400'}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint="project screenshot"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
                <div className="p-4 pt-0 flex gap-2">
                   <Button asChild variant="outline" size="sm">
                       <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 size-4"/> Live Demo
                       </a>
                   </Button>
                   {project.githubUrl && (
                        <Button asChild variant="secondary" size="sm">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 size-4"/> Source
                            </a>
                        </Button>
                   )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline">Get In Touch</h2>
          <p className="text-muted-foreground">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <Button asChild size="lg">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 size-4" /> Contact Me
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
}
