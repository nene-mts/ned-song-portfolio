import { useState } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Story from '../components/Story';
import Timeline from '../components/Timeline';
import Connect from '../components/Connect';
import ProjectOverlay from '../components/ProjectOverlay';
import { projects } from '../data';
import { motion } from 'motion/react';
import { Project } from '../types';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter(p => p.featured);
  const projectOffsets: Record<string, string> = {
    missgreen: 'md:-mt-2 md:pl-24',
    ebest: 'md:mt-14 md:pl-12',
    tiktok: 'md:-mt-6 md:pl-24',
    woolworths: 'md:mt-10 md:pl-10'
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <Hero />
      
      <section id="work" className="px-6 py-32 max-w-7xl mx-auto scroll-mt-20 relative overflow-hidden">
        <motion.svg
          initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute right-6 top-24 hidden h-24 w-24 text-pastel-peach md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            d="M22 42C38 18 62 18 78 42M30 58C42 46 58 46 70 58M43 76C48 72 54 72 59 76"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </motion.svg>
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.45rem] sm:text-5xl md:text-7xl font-black font-display tracking-tighter leading-[0.95] sm:leading-none"
          >
            Work I'm <span className="whitespace-nowrap text-black/20 italic">Proud Of</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-xl text-sm font-bold uppercase tracking-[0.24em] text-black/35"
          >
            A few proof-of-play moments from brands, campaigns, and digital builds.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 items-start gap-y-16 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {featuredProjects.map((project, idx) => (
            <div key={project.id} className={projectOffsets[project.id] ?? ''}>
              <ProjectCard 
                project={project} 
                index={idx} 
                onClick={(p) => setSelectedProject(p)}
              />
            </div>
          ))}
        </div>
      </section>

      <Story />
      <Timeline />
      <Connect />

      <ProjectOverlay 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </motion.main>
  );
}
