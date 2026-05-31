"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- 0. IMPORT ASSETS ---
import PetirImg from '../assets/petir.png';
import JoinUsGif from '../assets/joinus.gif'; 
import WeatherImg from '../assets/weatheer.gif'; 

// 1. Varian Animasi untuk efek Slide yang smooth
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

// 2. Sub-Komponen Carousel
const CardCarousel = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="relative group/carousel flex items-center justify-center w-full h-full overflow-hidden rounded-xl bg-pink-950/5">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) > 50;
            if (swipe) paginate(offset.x > 0 ? -1 : 1);
          }}
          className="absolute w-full h-full object-cover select-none cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Navigasi Panah - Hover Pink */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10">
        <button onClick={() => paginate(-1)} className="p-1 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-pink-500/50 transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => paginate(1)} className="p-1 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-pink-500/50 transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {/* Dots Active Pink */}
      <div className="absolute bottom-2 flex gap-1 z-10">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all ${i === imageIndex ? 'w-4 bg-pink-500' : 'w-1 bg-white/70'}`} 
          />
        ))}
      </div>
    </div>
  );
};

// 3. Data Projects - Color diganti variasi pink soft
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: [PetirImg, JoinUsGif, WeatherImg],
    color: 'from-pink-500/10 to-rose-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: [JoinUsGif, PetirImg, WeatherImg],
    color: 'from-rose-500/10 to-pink-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: [WeatherImg, PetirImg, JoinUsGif],
    color: 'from-pink-600/10 to-pink-400/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Premiere Pro', 'After Effects', 'YouTube'],
    image: [PetirImg, JoinUsGif, WeatherImg],
    color: 'from-rose-600/10 to-rose-400/10',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips programming dan best practices untuk developer Indonesia.',
    tags: ['Instagram', 'TikTok', 'YouTube Shorts'],
    image: [PetirImg, JoinUsGif, WeatherImg],
    color: 'from-pink-500/10 to-pink-500/20',
    isContent: true,
    youtube: '#',
  },
];

// 4. Komponen Utama
export default function ProjectsSection() {
  return (
    /* Mengubah background utama section menjadi pink soft senada */
    <section id="projects" className="py-20 md:py-32 bg-pink-50/50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            Projects & Karya
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card - Ditambahkan border pink tipis estetik */}
              <div className="h-full p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-pink-200/30 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                
                {/* Area Carousel */}
                <div className={`aspect-video rounded-xl mb-4 bg-gradient-to-br ${project.color}`}>
                  <CardCarousel images={project.image} />
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-600 font-medium dark:bg-pink-950/50 dark:text-pink-400">
                        Content
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white group-hover:text-pink-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags Badges - Hover Pink */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-pink-50 text-pink-600 font-medium border border-pink-100/50 dark:bg-zinc-800 dark:text-zinc-300 dark:border-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol Action - Disesuaikan ke tema Pink */}
                <div className="flex gap-2 pt-5 mt-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" className="rounded-full flex-1 border-pink-200 hover:bg-pink-50 hover:text-pink-600 dark:border-zinc-700 dark:hover:bg-zinc-800" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="rounded-full flex-1 bg-pink-500 hover:bg-pink-600 text-white" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.youtube && (
                    <Button size="sm" className="rounded-full w-full bg-pink-500 hover:bg-pink-600 text-white" asChild>
                      <a href={project.youtube}>
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}