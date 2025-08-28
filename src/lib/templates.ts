
import type { PortfolioData } from '@/types/portfolio';

export const templates = [
    {
        id: 'tech',
        name: 'Tech Professional',
        previewImage: 'https://picsum.photos/400/300?random=1',
        data: {
          personalInfo: {
            name: 'Alex Doe',
            headline: 'Aspiring Full-Stack Developer & Designer',
            bio: 'I am a passionate computer science student with a keen interest in developing user-centric web applications. I love tackling challenging problems and turning ideas into reality through code. My goal is to work in a collaborative environment where I can contribute to meaningful projects and continuously grow my skills.',
            email: 'alex.doe@example.com',
            linkedin: 'https://linkedin.com/in/alex-doe',
            github: 'https://github.com/alex-doe',
            profilePictureUrl: 'https://picsum.photos/400/400?random=1',
          },
          projects: [
            {
              id: '1',
              title: 'E-Commerce Platform',
              description: 'A full-featured e-commerce website built with React, Node.js, and a PostgreSQL database. Implemented secure user authentication, product management, and a Stripe-integrated checkout process.',
              imageUrl: 'https://picsum.photos/600/400?random=2',
              projectUrl: '#',
              githubUrl: '#',
            },
            {
              id: '2',
              title: 'Task Management App',
              description: 'A responsive task management application using Next.js and Firebase. Features include real-time database updates, drag-and-drop task reordering, and social authentication.',
              imageUrl: 'https://picsum.photos/600/400?random=3',
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
        } as PortfolioData
    },
    {
        id: 'designer',
        name: 'Creative Designer',
        previewImage: 'https://picsum.photos/400/300?random=4',
        data: {
          personalInfo: {
            name: 'Jane Smith',
            headline: 'Graphic Designer & Illustrator',
            bio: 'A creative and detail-oriented designer with a passion for visual storytelling. Experienced in branding, illustration, and web design. I strive to create beautiful and effective designs that communicate clearly and delight users.',
            email: 'jane.smith@example.com',
            linkedin: 'https://linkedin.com/in/jane-smith',
            github: 'https://github.com/jane-smith',
            profilePictureUrl: 'https://picsum.photos/400/400?random=4',
          },
          projects: [
            {
              id: '1',
              title: 'Branding for a Cafe',
              description: 'Developed a complete brand identity for a local cafe, including logo, color palette, typography, and marketing materials.',
              imageUrl: 'https://picsum.photos/600/400?random=5',
              projectUrl: '#',
              githubUrl: '',
            },
            {
              id: '2',
              title: 'Website Redesign',
              description: 'Led the redesign of a non-profit organization\'s website to improve user experience and increase donations.',
              imageUrl: 'https://picsum.photos/600/400?random=6',
              projectUrl: '#',
              githubUrl: '#',
            },
             {
              id: '3',
              title: 'Illustration Series',
              description: 'A personal project of digital illustrations inspired by nature and mythology.',
              imageUrl: 'https://picsum.photos/600/400?random=7',
              projectUrl: '#',
              githubUrl: '',
            },
          ],
          skills: [
            { id: '1', name: 'Adobe Photoshop' },
            { id: '2', name: 'Adobe Illustrator' },
            { id: '3', name: 'Figma' },
            { id: '4', name: 'Brand Identity' },
            { id: '5', name: 'Illustration' },
            { id: '6', name: 'Web Design' },
          ],
        } as PortfolioData
    },
    {
        id: 'minimalist',
        name: 'Minimalist',
        previewImage: 'https://picsum.photos/400/300?random=8',
        data: {
          personalInfo: {
            name: 'Sam Lee',
            headline: 'Software Engineer',
            bio: 'Clean code, clear thoughts. Focused on building efficient and scalable software solutions.',
            email: 'sam.lee@example.com',
            linkedin: 'https://linkedin.com/in/sam-lee',
            github: 'https://github.com/sam-lee',
            profilePictureUrl: 'https://picsum.photos/400/400?random=8',
          },
          projects: [
            {
              id: '1',
              title: 'API for a Mobile App',
              description: 'Designed and built a RESTful API to support a mobile application with thousands of daily active users.',
              imageUrl: 'https://picsum.photos/600/400?random=9',
              projectUrl: '#',
              githubUrl: '#',
            },
          ],
          skills: [
            { id: '1', name: 'Python' },
            { id: '2', name: 'Go' },
            { id: '3', name: 'System Design' },
            { id: '4', name: 'Databases' },
          ],
        } as PortfolioData
    }
]
