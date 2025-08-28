
"use client";

import * as React from 'react';
import { usePortfolioStore } from '@/hooks/use-portfolio-store';
import { Header } from '@/components/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { AiAssistantForm } from '@/components/ai-assistant-form';
import type { Project, Skill } from '@/types/portfolio';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Skeleton } from '@/components/ui/skeleton';
import { PlusCircle, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { templates } from '@/lib/templates';
import type { PortfolioData } from '@/types/portfolio';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EditPage() {
  const { portfolioData, setPortfolioData, isInitialized } = usePortfolioStore();
  const [newSkill, setNewSkill] = React.useState('');

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!portfolioData) return;
    const { name, value } = e.target;
    setPortfolioData({
      ...portfolioData,
      personalInfo: {
        ...portfolioData.personalInfo,
        [name]: value,
      },
    });
  };
  
  const handleAddProject = (newProject: Omit<Project, 'id'>) => {
    if (!portfolioData) return;
    const projectWithId = { ...newProject, id: Date.now().toString() };
    setPortfolioData({
      ...portfolioData,
      projects: [...portfolioData.projects, projectWithId],
    });
  }

  const handleUpdateProject = (updatedProject: Project) => {
    if (!portfolioData) return;
    setPortfolioData({
      ...portfolioData,
      projects: portfolioData.projects.map(p => p.id === updatedProject.id ? updatedProject : p),
    });
  }

  const handleDeleteProject = (projectId: string) => {
    if (!portfolioData) return;
     setPortfolioData({
      ...portfolioData,
      projects: portfolioData.projects.filter(p => p.id !== projectId),
    });
  }

  const handleAddSkill = () => {
    if (!portfolioData || !newSkill.trim()) return;
    if (portfolioData.skills.some(s => s.name.toLowerCase() === newSkill.trim().toLowerCase())) {
        setNewSkill('');
        return;
    }
    const skillToAdd: Skill = { id: Date.now().toString(), name: newSkill.trim() };
    setPortfolioData({
      ...portfolioData,
      skills: [...portfolioData.skills, skillToAdd],
    });
    setNewSkill('');
  };

  const handleDeleteSkill = (skillId: string) => {
    if (!portfolioData) return;
     setPortfolioData({
      ...portfolioData,
      skills: portfolioData.skills.filter(s => s.id !== skillId),
    });
  };

  const handleSelectTemplate = (templateData: PortfolioData) => {
    setPortfolioData(templateData);
  }


  if (!isInitialized || !portfolioData) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-1 container py-8">
                <Skeleton className="h-10 w-48 mb-4" />
                <Skeleton className="h-12 w-full mb-8" />
                <Card>
                    <CardHeader>
                        <Skeleton className="h-8 w-64" />
                        <Skeleton className="h-4 w-full mt-2" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-2">Portfolio Editor</h1>
        <p className="text-muted-foreground mb-8">
          Fill in your details below. Your changes are saved automatically.
        </p>

        <Tabs defaultValue="personal-info" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
          </TabsList>

          <TabsContent value="personal-info">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  This information will be displayed at the top of your portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={portfolioData.personalInfo.name} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="headline">Headline</Label>
                  <Input id="headline" name="headline" value={portfolioData.personalInfo.headline} onChange={handlePersonalInfoChange} placeholder="e.g., Full-Stack Developer" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="profilePictureUrl">Profile Picture URL</Label>
                  <Input id="profilePictureUrl" name="profilePictureUrl" value={portfolioData.personalInfo.profilePictureUrl} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">About Me</Label>
                  <Textarea id="bio" name="bio" value={portfolioData.personalInfo.bio} onChange={handlePersonalInfoChange} rows={5} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={portfolioData.personalInfo.email} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input id="linkedin" name="linkedin" value={portfolioData.personalInfo.linkedin} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub URL</Label>
                    <Input id="github" name="github" value={portfolioData.personalInfo.github} onChange={handlePersonalInfoChange} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>
                  Showcase your best work. Add projects to highlight your skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-4">
                      {portfolioData.projects.map((project) => (
                           <Card key={project.id} className="flex items-center p-4 gap-4">
                              <Image src={project.imageUrl || 'https://picsum.photos/100/100'} alt={project.title} width={80} height={80} className="rounded-md object-cover" data-ai-hint="project image"/>
                              <div className="flex-1">
                                  <h3 className="font-semibold">{project.title}</h3>
                                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                              </div>
                              <div className="flex gap-2">
                                <ProjectDialog project={project} onSave={handleUpdateProject} trigger={<Button variant="outline" size="sm">Edit</Button>} />
                                <Button variant="ghost" size="icon" onClick={() => handleDeleteProject(project.id)}>
                                    <Trash2 className="size-4 text-destructive" />
                                </Button>
                              </div>
                          </Card>
                      ))}
                  </div>
                  <ProjectDialog onSave={(p) => handleAddProject(p)} trigger={
                        <Button variant="outline" className="w-full mt-4">
                            <PlusCircle className="mr-2 size-4" /> Add Project
                        </Button>} 
                   />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>
                  List your technical and soft skills to showcase your expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {portfolioData.skills.map((skill) => (
                    <Badge key={skill.id} variant="secondary" className="group text-sm flex items-center gap-1 pl-3 pr-1 py-1">
                      {skill.name}
                      <button
                        onClick={() => handleDeleteSkill(skill.id)}
                        className="rounded-full opacity-50 group-hover:opacity-100 hover:bg-background/50 p-0.5 transition-opacity"
                        aria-label={`Remove ${skill.name}`}
                      >
                        <X className="size-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input 
                        type="text" 
                        placeholder="e.g. JavaScript"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddSkill();
                            }
                        }}
                    />
                    <Button type="button" onClick={handleAddSkill}>Add Skill</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Templates</CardTitle>
                <CardDescription>
                  Choose a template to quickly style your portfolio. This will replace your current content.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card key={template.id} className="overflow-hidden">
                    <Image 
                      src={template.previewImage} 
                      alt={`${template.name} template preview`} 
                      width={400} 
                      height={300} 
                      className="w-full h-auto object-cover border-b"
                      data-ai-hint="template preview"
                    />
                    <CardHeader>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="w-full">Select {template.name}</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Apply {template.name} Template?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will replace all your current portfolio content with the content from the {template.name} template. Are you sure you want to proceed?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleSelectTemplate(template.data)}>
                                Apply Template
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-assistant">
            <AiAssistantForm />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

const projectSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    imageUrl: z.string().url('Invalid URL'),
    projectUrl: z.string().url('Invalid URL'),
    githubUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
});

function ProjectDialog({ project, onSave, trigger }: { project?: Project, onSave: (data: any) => void, trigger: React.ReactNode }) {
    const isEditMode = !!project;
    const { register, handleSubmit, formState: { errors } } = useForm<Omit<Project, 'id'>>({
        resolver: zodResolver(projectSchema),
        defaultValues: isEditMode ? project : { title: '', description: '', imageUrl: 'https://picsum.photos/600/400', projectUrl: '', githubUrl: '' },
    });
    
    const [open, setOpen] = React.useState(false);

    const onSubmit = (data: Omit<Project, 'id'>) => {
        if(isEditMode && project) {
            onSave({ ...data, id: project.id });
        } else {
            onSave(data);
        }
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{isEditMode ? 'Edit Project' : 'Add Project'}</DialogTitle>
                    <DialogDescription>
                        {isEditMode ? 'Make changes to your project here.' : 'Add a new project to your portfolio.'} Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">Title</Label>
                        <Input id="title" {...register('title')} className="col-span-3" />
                         {errors.title && <p className="col-span-4 text-right text-sm text-destructive">{errors.title.message}</p>}
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Textarea id="description" {...register('description')} className="col-span-3" />
                         {errors.description && <p className="col-span-4 text-right text-sm text-destructive">{errors.description.message}</p>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="imageUrl" className="text-right">Image URL</Label>
                        <Input id="imageUrl" {...register('imageUrl')} className="col-span-3" />
                         {errors.imageUrl && <p className="col-span-4 text-right text-sm text-destructive">{errors.imageUrl.message}</p>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="projectUrl" className="text-right">Project URL</Label>
                        <Input id="projectUrl" {...register('projectUrl')} className="col-span-3" />
                         {errors.projectUrl && <p className="col-span-4 text-right text-sm text-destructive">{errors.projectUrl.message}</p>}
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="githubUrl" className="text-right">GitHub URL</Label>
                        <Input id="githubUrl" {...register('githubUrl')} className="col-span-3" />
                         {errors.githubUrl && <p className="col-span-4 text-right text-sm text-destructive">{errors.githubUrl.message}</p>}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancel</Button>
                      </DialogClose>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
