import type { Brand, BlogPost, Project, Service, StatItem, Testimonial } from '@/types';

export const siteIntro = {
  headline: 'Spatial narratives for residential and hospitality spaces.',
  copy: 'A premium interior studio bringing calm geometry, warm materials, and sculptural lighting to thoughtfully crafted environments. We design spaces that feel editorial, layered, and enduring.'
};

export const services: Service[] = [
  {
    title: 'Residential Design',
    subtitle: 'Private homes',
    description: 'Curated interiors for modern residences with a focus on tactile materials, subtle detail, and graceful proportion.',
    icon: 'home'
  },
  {
    title: 'Hospitality Experiences',
    subtitle: 'Boutique hotels',
    description: 'Atmospheric spaces that balance understated luxury with enduring comfort and memorable guest journeys.',
    icon: 'coffee'
  },
  {
    title: 'Furniture Direction',
    subtitle: 'Bespoke styling',
    description: 'Editoral furniture curation, lighting design, and bespoke product selection for elegant living.',
    icon: 'chair'
  }
];

export const stats: StatItem[] = [
  { label: 'Projects Completed', value: '48+' },
  { label: 'Countries Served', value: '14' },
  { label: 'Years of Practice', value: '12' },
  { label: 'Awards + Mentions', value: '23' }
];

export const processSteps = [
  {
    title: 'Concept & Research',
    description: 'We begin with a refined brief, spatial analysis, and a rich mood study rooted in materiality.'
  },
  {
    title: 'Design Development',
    description: 'Detailed plans, finishes, and 3D direction are shaped into a translated interior narrative.'
  },
  {
    title: 'Implementation',
    description: 'Construction oversight, procurement guidance and finishing touches ensure a thoughtful delivery.'
  }
];

export const projects: Project[] = [
  {
    title: 'Cove House',
    location: 'Mumbai, India',
    category: 'Private residence',
    image: '/images/project-1.svg'
  },
  {
    title: 'Aster Hotel',
    location: 'Goa, India',
    category: 'Hospitality suite',
    image: '/images/project-2.svg'
  },
  {
    title: 'Willow Loft',
    location: 'Pune, India',
    category: 'Urban apartment',
    image: '/images/project-3.svg'
  },
  {
    title: 'Studio Archive',
    location: 'Delhi, India',
    category: 'Design atelier',
    image: '/images/project-4.svg'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Matter of Space translated our vision into a serene and sophisticated home that feels both layered and restful.',
    author: 'Riya Sharma',
    role: 'Founder, Atelier R'
  },
  {
    quote: 'The hospitality scheme is warm without ever losing its editorial restraint. The details are beautifully resolved.',
    author: 'Anil Kapoor',
    role: 'Developer, Dune Collection'
  },
  {
    quote: 'Their process felt calm and precise, with a strong sense of architectural rhythm in every room.',
    author: 'Meera Patel',
    role: 'Collector & Client'
  }
];

export const brands: Brand[] = [
  { name: 'SOMA', label: 'Soma Studio' },
  { name: 'NOIR', label: 'Noir Living' },
  { name: 'LUNA', label: 'Luna Interiors' },
  { name: 'ARC', label: 'Arc Atelier' }
];

export const posts: BlogPost[] = [
  {
    title: 'Material direction for editorial homes',
    excerpt: 'How layered textures and soft tonal palettes shape a signature interior experience.',
    date: 'May 2026',
    category: 'Design Journal'
  },
  {
    title: 'Lighting as spatial atmosphere',
    excerpt: 'A deep dive into luminous layers, sculptural forms, and subtle warmth.',
    date: 'April 2026',
    category: 'Studio Notes'
  },
  {
    title: 'The role of restraint in luxury interiors',
    excerpt: 'Why quiet composition makes a space feel considered and timeless.',
    date: 'March 2026',
    category: 'Insights'
  }
];
