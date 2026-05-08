import { motion } from 'motion/react';
import { timeline } from '../data';

export default function Timeline() {
  return (
    <section id="process" className="py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative">
        <motion.svg
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute left-4 top-2 hidden h-20 w-20 text-pastel-green md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            d="M22 58C34 34 54 74 72 34M72 34L70 50M72 34L58 42"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </motion.svg>
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-4"
          >
            My Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold uppercase tracking-[0.24em] text-black/35"
          >
            A few places that shaped how I think, work, and make things.
          </motion.p>
        </div>

        <div className="relative">
          {/* Hand-drawn line */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0 hidden md:block">
            <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none" preserveAspectRatio="none">
              <path 
                d="M0 10C100 12 200 8 300 10C400 12 500 8 600 10C700 12 800 8 900 10C1000 12 1100 8 1200 10" 
                stroke="black" 
                strokeWidth="1" 
                strokeLinecap="round"
                strokeDasharray="4 4"
                className="opacity-20"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {timeline.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center group relative"
                >
                  <div className="relative mb-8 flex h-24 w-24 transform-gpu items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
                    {item.logo ? (
                      <div className="flex h-full w-full items-center justify-center p-2">
                        <img
                          src={item.logo}
                          alt={item.title}
                          className={`w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                            item.title === 'XD, SISU'
                              ? 'h-[4.8rem] rounded-full'
                              : item.title === 'TikTok'
                                ? 'max-h-[4.6rem]'
                                : item.title === 'USYD'
                                  ? 'max-h-[4.7rem]'
                                  : item.title === 'eBest'
                                    ? 'max-h-[4.8rem]'
                                    : item.title === 'MissGreen'
                                      ? 'max-h-[4.8rem]'
                                      : 'max-h-[4.7rem]'
                          }`}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div 
                        className="absolute inset-0 opacity-100 transition-opacity duration-500 flex items-center justify-center text-black"
                        style={{ color: 'inherit' }}
                      />
                    )}
                    <span className="pointer-events-none absolute -left-14 top-[-18%] h-[140%] w-7 -rotate-[24deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.88)_48%,rgba(255,255,255,0)_100%)] opacity-0 blur-[1px] shadow-[0_0_18px_rgba(255,255,255,0.9)] transition-all duration-700 ease-out group-hover:translate-x-44 group-hover:opacity-100" />
                  </div>
                  <div className="bg-black text-white px-3 py-1 rounded-full mb-4">
                    <span className="text-[10px] font-black tracking-tighter">{item.year}</span>
                  </div>
                  <h4 className="text-xl font-black font-display mb-1">{item.title}</h4>
                  <p className="text-sm text-black/50 font-medium">{item.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
