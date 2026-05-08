import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const personalPhotos = [
  '/portfolio/_shared/ned_life_pic_1.jpeg',
  '/portfolio/_shared/ned_life_pic_2.jpeg',
  '/portfolio/_shared/ned_life_pic_3.jpeg',
  '/portfolio/_shared/ned_life_pic_4.jpeg',
];

const photoCaptions = [
  'cringe pose in disney 💀',
  'me and my mates being thai',
  'me being professional (or just trying to be)...',
  'toga mode with my mate',
];

export default function Story() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    personalPhotos.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % personalPhotos.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="story" className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto relative">
        <motion.svg
          initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute -right-2 top-4 hidden h-20 w-20 text-pastel-blue md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            d="M26 26C44 14 66 20 72 38C80 62 54 80 34 68C18 58 14 38 26 26Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <path d="M36 44C42 50 50 51 60 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </motion.svg>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight max-w-5xl">
            I care about people — and I build with that in mind.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-lg text-black/70 leading-relaxed"
          >
            <p>
              Hi, I’m Ned.
            </p>
            <p>
              I work in marketing, but at the core, I’m just someone who pays close attention to people — what they feel, what they notice, and what makes them stay.
            </p>
            <p>
              I grew up in Shanghai and spent the past few years in Sydney, which shaped how I think about strategy, creativity, and what actually works.
            </p>
            <p>
              I care about building things people connect with — and right now, I’m doing that (and learning a lot) at MissGreen.
            </p>
          </motion.div>

          <div className="relative h-[520px] flex items-center justify-center">
            {personalPhotos.map((photo, index) => {
              const isActive = index === activeIndex;
              const isWidePhoto = index >= 2;

              return (
                <motion.div
                  key={photo}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    rotate: isActive ? 2 : -2,
                    scale: isActive ? 1 : 0.985,
                  }}
                  transition={{ duration: 0.65, ease: 'easeInOut' }}
                  className={`absolute bg-white p-3 shadow-2xl border border-gray-100 transform-gpu will-change-transform ${
                    isActive ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'
                  } ${isWidePhoto ? 'w-[24rem] pb-11' : 'w-72 pb-12'}`}
                >
                  <div className={`${isWidePhoto ? 'aspect-[4/3]' : 'aspect-[3/4]'} bg-gray-100 overflow-hidden mb-4`}>
                    <img
                      src={photo}
                      alt={`Ned lifestyle ${index}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      decoding="async"
                      loading="eager"
                    />
                  </div>
                  <p className="min-h-5 text-center font-hand text-lg italic leading-none text-black/45">
                    {photoCaptions[index]}
                  </p>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {personalPhotos.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i === activeIndex ? 'bg-pastel-blue' : 'bg-black/10'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
