import { Project, ProjectSummary } from './types';

// Dummy project data - replace with your actual data source
const projects: Project[] = [
  {
    id: 'p001',
    slug: 'modern-ecommerce',
    title: 'Modern E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with Next.js, TypeScript, and Tailwind CSS. Features include dynamic product pages, filtering system, user authentication, cart functionality, and payment processing.',
    shortDescription: 'Full-stack e-commerce platform with modern user experience',
    client: 'StyleHaven',
    date: '2024-01-15',
    updatedAt: '2024-03-10',
    tags: ['Next.js', 'TypeScript', 'E-commerce', 'Tailwind CSS', 'Stripe'],
    category: 'web',
    featured: true,
    coverImage: '/images/projects/ecommerce/cover.jpg',
    ogImage: '/images/projects/ecommerce/og.jpg',
    twitterImage: '/images/projects/ecommerce/twitter.jpg',
    images: [
      '/images/projects/ecommerce/dashboard.jpg',
      '/images/projects/ecommerce/product-page.jpg',
      '/images/projects/ecommerce/checkout.jpg',
      '/images/projects/ecommerce/mobile-view.jpg',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'MongoDB', 'Vercel'],
    liveUrl: 'https://stylehaven-demo.vercel.app',
    sourceUrl: 'https://github.com/yourusername/stylehaven',
    content: `
# Modern E-Commerce Platform

## Overview
This project is a full-stack e-commerce platform built for StyleHaven, a fashion retailer looking to modernize their online presence. The client needed a solution that would provide excellent performance, SEO, and user experience while being easy to manage.

## Technical Approach
I chose Next.js for this project to leverage its powerful rendering options, combining static generation for product catalog pages with server components for dynamic features like search and filtering. The application uses TypeScript throughout to ensure type safety and improve development experience.

### Key Features
- Server-side rendered product pages with optimized metadata
- Client-side filtering and sorting with minimal bundle size
- Responsive design that works beautifully on all devices
- Integrated payment processing with Stripe
- Admin dashboard for content management
- Real-time inventory updates

## Design Philosophy
The interface was designed with simplicity and elegance in mind, focusing on showcasing the products while providing intuitive navigation. I worked closely with the client to understand their brand identity and target audience.

## Challenges & Solutions
One significant challenge was implementing a performant filtering system that wouldn't require full page reloads. I solved this by using React Server Components with partial hydration, allowing for snappy filtering while maintaining SEO benefits.
    `,
    color: '#3B82F6',
    testimonial: {
      quote: "The e-commerce platform exceeded our expectations in both functionality and design. Our conversion rate has increased by 37% since launch.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "StyleHaven"
    }
  },
  {
    id: 'p002',
    slug: 'data-visualization-dashboard',
    title: 'Interactive Analytics Dashboard',
    description: 'A sophisticated data visualization dashboard for financial analytics. Built with React, D3.js, and TypeScript, the dashboard provides real-time data monitoring, interactive charts, and customizable widgets.',
    shortDescription: 'Real-time financial analytics with interactive visualizations',
    client: 'FinanceInsight',
    date: '2023-11-05',
    updatedAt: '2024-02-20',
    tags: ['React', 'TypeScript', 'D3.js', 'Data Visualization', 'Dashboard'],
    category: 'web',
    featured: true,
    coverImage: '/images/projects/dashboard/cover.jpg',
    ogImage: '/images/projects/dashboard/og.jpg',
    twitterImage: '/images/projects/dashboard/twitter.jpg',
    images: [
      '/images/projects/dashboard/main-view.jpg',
      '/images/projects/dashboard/charts.jpg',
      '/images/projects/dashboard/mobile.jpg',
      '/images/projects/dashboard/widgets.jpg',
    ],
    technologies: ['React', 'TypeScript', 'D3.js', 'Redux', 'WebSockets', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://finance-dashboard-demo.netlify.app',
    content: `
# Interactive Analytics Dashboard

## Project Background
FinanceInsight needed a modern analytics platform to replace their outdated reporting system. They required a solution that could handle large datasets and provide insights through intuitive visualizations.

## Technical Implementation
I built this dashboard using React for the UI components and D3.js for the data visualizations. The application uses WebSockets to stream real-time data updates and stores user preferences in Firebase.

### Key Features
- Interactive charts with zoom, pan, and drill-down capabilities
- Customizable dashboard layouts with drag-and-drop widgets
- Data export in multiple formats (CSV, PDF, Excel)
- User-specific saved views and settings
- Dark/light mode with automatic system preference detection

## Performance Optimizations
To handle large datasets smoothly, I implemented:
- Data windowing for long lists
- Throttled updates for real-time data
- WebWorkers for heavy calculations
- Memoization for complex rendering operations

## User Research
Before development, I conducted user interviews with financial analysts to understand their workflow and pain points. The final design reflects their need for quick access to key metrics and the ability to explore data in depth when needed.
    `,
    color: '#10B981'
  },
  {
    id: 'p003',
    slug: 'art-portfolio-gallery',
    title: 'Immersive Art Portfolio',
    description: 'A creative portfolio website for a digital artist featuring WebGL animations, interactive elements, and a responsive gallery. Built with Next.js, Three.js, and GSAP for smooth animations.',
    shortDescription: 'Interactive artist portfolio with WebGL animations',
    date: '2023-09-22',
    updatedAt: '2024-01-15',
    tags: ['Next.js', 'Three.js', 'WebGL', 'GSAP', 'Portfolio'],
    category: 'art',
    featured: false,
    coverImage: '/images/projects/art-portfolio/cover.jpg',
    ogImage: '/images/projects/art-portfolio/og.jpg',
    twitterImage: '/images/projects/art-portfolio/twitter.jpg',
    images: [
      '/images/projects/art-portfolio/homepage.jpg',
      '/images/projects/art-portfolio/gallery.jpg',
      '/images/projects/art-portfolio/piece-detail.jpg',
      '/images/projects/art-portfolio/mobile.jpg',
    ],
    technologies: ['Next.js', 'Three.js', 'TypeScript', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://elena-art-portfolio.vercel.app',
    sourceUrl: 'https://github.com/yourusername/art-portfolio',
    content: `
# Immersive Art Portfolio

## Concept
This portfolio website was designed to showcase the work of a digital artist in an immersive and interactive way. The design philosophy focused on creating a canvas-like experience where the website itself feels like part of the artist's work.

## Technical Implementation
The site was built using Next.js with TypeScript for the foundation. The visual effects were created using Three.js for WebGL and GSAP for animations. Page transitions use Framer Motion to create smooth, cohesive movement between sections.

### Interactive Elements
- Cursor-reactive canvas on the homepage
- Parallax scrolling gallery
- WebGL distortion effects on image hover
- Audio-reactive visualizations for sound pieces
- Custom scrolling behavior

## Performance Considerations
Despite the heavy visual elements, the site maintains excellent performance through:
- Lazy loading of images and 3D assets
- Throttled animation frames
- Reduced quality on mobile devices
- Progressive enhancement approach

## Accessibility
To ensure the site remained accessible despite its artistic nature, I implemented:
- Keyboard navigation for all interactive elements
- Screen reader descriptions for visual effects
- Option to disable animations
- High contrast mode
    `,
    color: '#EC4899'
  },
  {
    id: 'p004',
    slug: 'mobile-fitness-app',
    title: 'Mobile Fitness Application',
    description: 'A cross-platform fitness application built with React Native and TypeScript. Features include workout tracking, progress visualization, personalized plans, and social sharing capabilities.',
    shortDescription: 'Cross-platform fitness tracking with personalized plans',
    client: 'FitTrack Inc.',
    date: '2023-07-10',
    updatedAt: '2024-03-05',
    tags: ['React Native', 'TypeScript', 'Mobile App', 'Fitness', 'Redux'],
    category: 'mobile',
    featured: true,
    coverImage: '/images/projects/fitness-app/cover.jpg',
    ogImage: '/images/projects/fitness-app/og.jpg',
    twitterImage: '/images/projects/fitness-app/twitter.jpg',
    images: [
      '/images/projects/fitness-app/home-screen.jpg',
      '/images/projects/fitness-app/workout-tracker.jpg',
      '/images/projects/fitness-app/progress-charts.jpg',
      '/images/projects/fitness-app/social-feed.jpg',
    ],
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Expo', 'Victory Charts'],
    liveUrl: 'https://apps.apple.com/us/app/fittrack-workout-planner',
    content: `
# Mobile Fitness Application

## Project Overview
FitTrack Inc. wanted to create a comprehensive fitness application that would help users track workouts, monitor progress, and stay motivated through community features.

## Technical Approach
I built the application using React Native with TypeScript to ensure a consistent experience across iOS and Android. The app uses Redux for state management and Firebase for backend services including authentication, data storage, and real-time updates.

### Key Features
- Personalized workout recommendations based on user goals
- Detailed exercise tracking with form tips and videos
- Progress visualization with customizable metrics
- Social feed for sharing achievements and workouts
- Offline mode for tracking workouts without internet
- Health app integrations

## UX Research
Before development, we conducted extensive user research including:
- Competitive analysis of existing fitness apps
- User interviews with fitness enthusiasts and personal trainers
- Usability testing of prototype designs

## Technical Challenges
One of the main challenges was ensuring accurate workout tracking across different device types and sizes. I implemented a custom animation system that adapts to different screen dimensions while maintaining precise timing for interval workouts.

Another challenge was optimizing battery usage while tracking long workout sessions. The solution involved selective sensor polling and background process optimization.
    `,
    color: '#F59E0B',
    testimonial: {
      quote: "Working with this developer was a game-changer for our app. They delivered a polished product that our users love, with attention to detail that exceeded our expectations.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "FitTrack Inc."
    }
  },
  {
    id: 'p005',
    slug: 'ai-content-generator',
    title: 'AI-Powered Content Studio',
    description: 'An AI content generation platform that helps creators produce articles, social media posts, and marketing copy. Built with Next.js, TypeScript, and OpenAI API integration.',
    shortDescription: 'AI tool for automated content generation and optimization',
    client: 'ContentGenius',
    date: '2024-02-01',
    updatedAt: '2024-03-25',
    tags: ['AI', 'Next.js', 'TypeScript', 'SaaS', 'OpenAI'],
    category: 'web',
    featured: false,
    coverImage: '/images/projects/ai-content/cover.jpg',
    ogImage: '/images/projects/ai-content/og.jpg',
    twitterImage: '/images/projects/ai-content/twitter.jpg',
    images: [
      '/images/projects/ai-content/dashboard.jpg',
      '/images/projects/ai-content/editor.jpg',
      '/images/projects/ai-content/templates.jpg',
      '/images/projects/ai-content/analytics.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'MongoDB', 'Tailwind CSS', 'Stripe', 'Vercel'],
    liveUrl: 'https://contentgenius.ai',
    content: `
# AI-Powered Content Studio

## Project Overview
ContentGenius wanted to create a platform that would help marketers and content creators generate high-quality content efficiently using AI. The platform needed to be user-friendly, produce diverse content types, and help optimize content for different channels.

## Technical Implementation
The application was built with Next.js and TypeScript, using a combination of server-side rendering and client-side interactivity. The AI features leverage OpenAI's API with custom fine-tuning for specific content types.

### Key Features
- AI-powered content generation across multiple formats
- Template library for different content needs
- Content editing interface with real-time AI suggestions
- SEO optimization tools
- Performance analytics for published content
- Team collaboration tools

## AI Engineering
A significant part of this project involved engineering effective prompts and workflows for the AI system. I created:
- Custom instruction sets for different content categories
- Quality assurance checks to ensure factual accuracy
- Content style matching to maintain brand voice
- Progressive generation approach for longer articles

## Business Model Integration
The application includes a complete SaaS infrastructure with:
- Tiered subscription plans managed through Stripe
- Usage tracking and quotas
- Team member permissions and roles
- White-label options for agencies
    `,
    color: '#8B5CF6'
  }
];

/**
 * Get all projects
 */
export async function getAllProjects(): Promise<Project[]> {
  // In a real application, this would fetch from an API or database
  return projects;
}

/**
 * Get all project summaries (for listing pages)
 */
export async function getAllProjectSummaries(): Promise<ProjectSummary[]> {
  const allProjects = await getAllProjects();
  return allProjects.map(({ id, slug, title, shortDescription, coverImage, tags, category, date, featured }) => ({
    id,
    slug,
    title,
    shortDescription,
    coverImage,
    tags,
    category,
    date,
    featured,
  }));
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(): Promise<ProjectSummary[]> {
  const allProjects = await getAllProjects();
  return allProjects
    .filter(project => project.featured)
    .map(({ id, slug, title, shortDescription, coverImage, tags, category, date, featured }) => ({
      id,
      slug,
      title,
      shortDescription,
      coverImage,
      tags,
      category,
      date,
      featured,
    }));
}

/**
 * Get a specific project by slug
 */
export async function getProject(slug: string): Promise<Project | null> {
  const allProjects = await getAllProjects();
  return allProjects.find(project => project.slug === slug) || null;
}

/**
 * Get all project slugs (for static path generation)
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map(project => project.slug);
}

/**
 * Get related projects by tags or category
 */
export async function getRelatedProjects(slug: string, limit: number = 3): Promise<ProjectSummary[]> {
  const currentProject = await getProject(slug);
  if (!currentProject) return [];
  
  const allProjects = await getAllProjects();
  
  // Filter out the current project and find related ones
  return allProjects
    .filter(project => project.slug !== slug) // Exclude current project
    .map(project => {
      // Calculate relevance score based on shared tags and category
      const sharedTags = project.tags.filter(tag => currentProject.tags.includes(tag)).length;
      const categoryMatch = project.category === currentProject.category ? 1 : 0;
      const relevanceScore = sharedTags + (categoryMatch * 2); // Category match is weighted more heavily
      
      return {
        ...project,
        relevanceScore
      };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore) // Sort by relevance
    .slice(0, limit) // Take only the requested number
    .map(({ id, slug, title, shortDescription, coverImage, tags, category, date, featured }) => ({
      id,
      slug, 
      title,
      shortDescription,
      coverImage,
      tags,
      category,
      date,
      featured
    }));
}