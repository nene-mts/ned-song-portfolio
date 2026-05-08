import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const cardImage = project.cardImage ?? project.image;
  const aspectClass =
    project.cardAspect === 'portrait'
      ? 'aspect-[4/5.5]'
      : project.cardAspect === 'square'
        ? 'aspect-square'
        : 'aspect-[4/3]';
  const widthClass = project.cardCompact ? 'max-w-[28rem] mx-auto' : '';

  if (project.cardStyle === 'character' || project.cardStyle === 'cutout') {
    const imageClass =
      project.id === 'woolworths'
        ? 'h-[18rem] sm:h-[19rem] md:h-[20rem]'
        : project.id === 'tiktok'
          ? 'h-[15.5rem] sm:h-[16.5rem] md:h-[17.5rem]'
          : project.id === 'missgreen'
            ? 'h-[15.5rem] sm:h-[16.5rem] md:h-[17.5rem]'
            : 'h-[15rem] sm:h-[16rem] md:h-[17rem]';
    const objectShiftClass =
      project.id === 'missgreen'
        ? 'md:translate-x-10'
        : project.id === 'tiktok'
          ? 'md:translate-x-10'
          : '';

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          rotate: index % 2 === 0 ? 1.5 : -1.5,
          scale: 1.01,
          transition: { duration: 0.4, ease: 'easeOut' }
        }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <div className="mb-4 flex justify-center md:justify-start">
          <button
            type="button"
            onClick={() => onClick(project)}
            className={`relative inline-flex cursor-pointer items-end justify-center bg-transparent p-0 text-left ${
              project.id === 'woolworths'
                ? 'min-h-[20rem] w-[20rem] sm:w-[21rem]'
                : project.id === 'tiktok'
                  ? 'min-h-[18rem] w-[18rem] sm:w-[19rem]'
                  : project.id === 'missgreen'
                    ? 'min-h-[18rem] w-[18rem] sm:w-[19rem]'
                    : 'min-h-[17.5rem] w-[17.5rem] sm:w-[18.5rem]'
            } ${objectShiftClass}`}
            aria-label={`Open ${project.title} project`}
          >
            <svg
              className={`pointer-events-none absolute h-24 w-24 text-pastel-green/80 transition-transform duration-500 group-hover:-translate-y-1 ${
                project.id === 'woolworths' ? 'left-0 top-8' : project.id === 'tiktok' ? 'left-1 top-4' : 'left-0 top-6'
              }`}
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M18 58C30 34 54 68 76 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M72 28L72 42L58 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg
              className={`pointer-events-none absolute h-24 w-24 text-pastel-yellow/75 transition-transform duration-500 group-hover:translate-x-1 ${
                project.id === 'woolworths' ? 'right-6 top-0' : project.id === 'tiktok' ? 'right-4 top-1' : 'right-6 top-0'
              }`}
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M28 30L36 44L52 48L36 52L28 66L20 52L4 48L20 44L28 30Z" fill="currentColor" />
            </svg>
            <svg
              className={`pointer-events-none absolute h-20 w-20 text-pastel-peach/75 transition-transform duration-500 group-hover:-translate-x-1 ${
                project.id === 'woolworths' ? 'bottom-4 left-2' : project.id === 'tiktok' ? 'bottom-3 left-4' : 'bottom-4 left-3'
              }`}
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M24 60C34 34 66 34 76 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M34 72C44 66 56 66 66 72" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <svg
              className={`pointer-events-none absolute h-20 w-20 text-pastel-blue/75 transition-transform duration-500 group-hover:-translate-y-1 ${
                project.id === 'woolworths' ? 'left-[3.8rem] top-5' : project.id === 'tiktok' ? 'left-[7.8rem] top-5' : 'left-[3.2rem] top-4'
              }`}
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M20 46H76" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M34 32L20 46L34 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg
              className={`pointer-events-none absolute h-20 w-20 text-black/80 transition-transform duration-500 group-hover:translate-y-1 ${
                project.id === 'woolworths' ? 'right-1 bottom-6' : project.id === 'tiktok' ? 'right-1 top-[4.4rem]' : 'right-2 bottom-5'
              }`}
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M30 30L70 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M70 30L30 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <img
              src={cardImage}
              alt={project.title}
              className={`relative z-10 w-auto object-contain transition-transform duration-700 group-hover:scale-[1.07] drop-shadow-[0_18px_24px_rgba(0,0,0,0.08)] ${imageClass}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute right-0 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.3)] transition-all duration-300 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </button>
        </div>
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[30rem]">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold font-display">{project.title}</h3>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">
                {project.category}
              </span>
            </div>
            <p className="text-black/50 text-sm mt-1">{project.description}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        rotate: index % 2 === 0 ? 2 : -2,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className={`relative ${aspectClass} ${widthClass} overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {project.cardAspect === 'portrait' && (
          <svg
            className="pointer-events-none absolute -left-3 -top-3 h-20 w-20 text-pastel-peach opacity-90"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M18 44C28 22 54 18 70 34C82 46 82 68 66 78C48 90 24 80 18 58"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M75 20L79 29L88 33L79 37L75 46L71 37L62 33L71 29L75 20Z"
              fill="currentColor"
            />
          </svg>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold font-display">{project.title}</h3>
          <p className="text-black/50 text-sm mt-1">{project.description}</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 border border-black/10 px-2 py-1 rounded">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
}
