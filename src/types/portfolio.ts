export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

export interface Skill {
  id:string;
  name: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    headline: string;
    bio: string;
    email: string;
    linkedin: string;
    github: string;
    profilePictureUrl: string;
  };
  projects: Project[];
  skills: Skill[];
}

export const initialPortfolioData: PortfolioData = {
  personalInfo: {
    name: 'Alex Doe',
    headline: 'Aspiring Full-Stack Developer & Designer',
    bio: 'I am a passionate computer science student with a keen interest in developing user-centric web applications. I love tackling challenging problems and turning ideas into reality through code. My goal is to work in a collaborative environment where I can contribute to meaningful projects and continuously grow my skills.',
    email: 'alex.doe@example.com',
    linkedin: 'https://linkedin.com/in/alex-doe',
    github: 'https://github.com/alex-doe',
    profilePictureUrl: 'https://picsum.photos/400/400',
  },
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website built with React, Node.js, and a PostgreSQL database. Implemented secure user authentication, product management, and a Stripe-integrated checkout process.',
      imageUrl: 'https://picsum.photos/600/400',
      projectUrl: '#',
      githubUrl: '#',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A responsive task management application using Next.js and Firebase. Features include real-time database updates, drag-and-drop task reordering, and social authentication.',
      imageUrl: 'https://picsum.photos/600/400',
      projectUrl: '#',
      githubUrl: '#',
    },
  ],
  skills: [
    { id: '1', name: 'JavaScript' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'React' },
    { id: '4', name: 'Next.js' },
    { id: '5', name: 'Node.js' },
    { id: '6', name: 'UI/UX Design' },
    { id: '7', name: 'Figma' },
    { id: '8', name: 'SQL' },
  ],
};
