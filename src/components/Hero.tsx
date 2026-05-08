import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const letters = [
  { char: 'N', element: 'intro' },
  { char: 'E', element: 'whatIDo' },
  { char: 'D', element: 'polaroid' },
  { char: ' ', element: null },
  { char: 'S', element: 'background' },
  { char: 'O', element: 'stickySkills' },
  { char: 'N', element: 'global' },
  { char: 'G', element: 'personality' },
];

const elements = {
  intro: (
    <motion.div 
      initial={{ rotate: -15, scale: 0.5, opacity: 0, y: 20 }}
      animate={{ rotate: -5, scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.5, opacity: 0, rotate: -15 }}
      transition={{ type: 'spring', stiffness: 620, damping: 22 }}
      className="absolute -left-6 -top-20 z-50 w-max rounded-2xl border border-black/5 bg-white px-6 py-3 shadow-xl sm:-left-8 sm:-top-24 sm:px-8 sm:py-4"
    >
      <span className="text-xl font-black font-display text-black">Hi, I'm Ned! 👋</span>
    </motion.div>
  ),
  whatIDo: (
    <motion.div 
      initial={{ y: 40, opacity: 0, rotate: 10 }}
      animate={{ y: 0, opacity: 1, rotate: 5 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 560, damping: 22 }}
      className="absolute -top-48 left-1/2 z-50 flex -translate-x-1/2 flex-col gap-2 sm:-top-56"
    >
      {['Marketing', 'Brand', 'Content', 'Digital'].map((text, i) => (
        <motion.div
          key={text}
          initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.025, duration: 0.14 }}
          className={`px-4 py-2 text-xs font-black uppercase border border-black/5 shadow-lg rounded-xl sm:px-5 sm:text-sm ${
            ['bg-pastel-blue', 'bg-pastel-green', 'bg-pastel-purple', 'bg-pastel-peach'][i]
          }`}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  ),
  polaroid: (
    <motion.div 
      initial={{ rotate: -20, scale: 0.5, opacity: 0 }}
      animate={{ rotate: -8, scale: 1, opacity: 1 }}
      exit={{ rotate: -20, scale: 0.5, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 620, damping: 22 }}
      className="absolute -top-64 left-1/2 z-50 w-48 -translate-x-1/2 border border-black/5 bg-white p-3 pb-11 shadow-2xl sm:-top-80 sm:w-64 sm:p-4 sm:pb-16"
    >
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4 border border-gray-100 rounded-sm">
        <img 
          src="/portfolio/_shared/ned_song_profile_pic.png" 
          alt="Ned" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-base font-hand italic text-black/60 block text-center">That's me :)</span>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-10 bg-white/60 backdrop-blur-sm border border-white/30 rotate-3 shadow-sm" />
    </motion.div>
  ),
  background: (
    <motion.div 
      initial={{ x: -50, opacity: 0, rotate: -10 }}
      animate={{ x: 0, opacity: 1, rotate: -3 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 520, damping: 22 }}
      className="absolute -top-20 left-1/2 z-50 flex w-max -translate-x-1/2 items-center gap-4 rounded-2xl bg-black px-5 py-3 text-white shadow-xl sm:-top-24 sm:px-8 sm:py-4"
    >
      <span className="text-base font-black italic tracking-tight">Shanghai ✈ Sydney</span>
    </motion.div>
  ),
  stickySkills: (
    <motion.div 
      initial={{ rotate: 15, scale: 0.8, opacity: 0 }}
      animate={{ rotate: -4, scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
      transition={{ type: 'spring', stiffness: 620, damping: 22 }}
      className="absolute -top-48 left-1/2 z-50 w-48 -translate-x-1/2 rounded-r-2xl border border-black/5 border-l-8 border-purple-300/50 bg-pastel-purple p-6 text-left shadow-2xl sm:-top-56 sm:w-56 sm:p-8"
    >
      <div className="absolute top-0 left-0 w-full h-6 bg-black/5" />
      <ul className="text-sm font-bold space-y-3 text-black/80">
        <li className="flex items-center gap-3"><span>✨</span> Campaigns</li>
        <li className="flex items-center gap-3"><span>🎯</span> Strategy</li>
        <li className="flex items-center gap-3"><span>✍️</span> Content</li>
        <li className="flex items-center gap-3"><span>💻</span> Websites</li>
        <li className="flex items-center gap-3"><span>🎨</span> Brand Visual</li>
      </ul>
    </motion.div>
  ),
  global: (
    <motion.div 
      initial={{ y: 30, opacity: 0, rotate: -5 }}
      animate={{ y: 0, opacity: 1, rotate: 2 }}
      exit={{ y: 30, opacity: 0 }}
      className="absolute -top-28 left-1/2 z-50 w-[15rem] -translate-x-1/2 rounded-[2rem] border border-black/5 bg-white px-5 py-4 text-center shadow-2xl sm:-top-32 sm:w-max sm:rounded-[2.5rem] sm:px-8 sm:py-6"
    >
      <p className="mb-1 text-2xl font-black tracking-tighter sm:text-3xl">EN / 中文</p>
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-black/40 sm:text-xs sm:tracking-[0.3em]">Global perspective</p>
    </motion.div>
  ),
  personality: (
    <motion.div 
      initial={{ rotate: 18, scale: 0.5, opacity: 0 }}
      animate={{ rotate: 7, scale: 1, opacity: 1 }}
      exit={{ rotate: 18, scale: 0.5, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 620, damping: 22 }}
      className="absolute -top-60 left-1/2 z-50 w-44 -translate-x-1/2 rounded-sm border border-black/5 bg-white p-2.5 pb-9 shadow-2xl sm:-top-72 sm:w-56 sm:p-3 sm:pb-12"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden mb-3 border border-gray-100 rounded-sm">
        <img
          src="/portfolio/_shared/meme.gif"
          alt="Ned meme"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-sm font-hand italic text-black/60 block text-center">meme mode on</span>
      <div className="absolute -top-5 left-8 h-9 w-16 bg-white/60 backdrop-blur-sm border border-white/30 -rotate-12 shadow-sm" />
      <div className="absolute -right-4 top-10 h-14 w-7 bg-pastel-green/70 rotate-6 shadow-sm" />
    </motion.div>
  ),
};

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const beamStageRef = useRef<HTMLDivElement>(null);
  const beamRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollRafRef = useRef<number | null>(null);
  const pastelHexColors = [
    '#A5D8FF',
    '#B2F2BB',
    '#D8F5A2',
    '#E5DBFF',
    '#FFD8A8',
  ];
  const clearHoverIfPointerSupportsHover = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setHoveredIndex(null);
    }
  };

  useEffect(() => {
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
    const getBeamStage = () => beamStageRef.current ?? document.querySelector<HTMLDivElement>('[data-hero-beam-stage]');
    let currentProgress = 0;
    let targetProgress = 0;

    const applyScrollTransform = () => {
      const element = getBeamStage();

      if (!element) {
        scrollRafRef.current = window.requestAnimationFrame(applyScrollTransform);
        return;
      }

      const scrollingElement = document.scrollingElement || document.documentElement;
      const scrollY = Math.round(scrollingElement.scrollTop || window.scrollY);
      const maxScroll = Math.max(window.innerHeight * 1.15, 1);
      targetProgress = clamp(scrollY / maxScroll, 0, 1);
      currentProgress += (targetProgress - currentProgress) * 0.09;

      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      const translateY = Math.round(currentProgress * -560);
      const translateX = Math.round(currentProgress * -84);
      const scaleY = Math.round((1 + currentProgress * 0.1) * 1000) / 1000;

      element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scaleY(${scaleY})`;

      beamRefs.current.forEach((beam, index) => {
        if (!beam) return;

        const baseRotate = Number(beam.dataset.baseRotate || 0);
        const scrollLift = Math.round(currentProgress * -110);
        const scrollSpread = Math.round(currentProgress * (index - 3) * 2.4);
        const scrollScale = Math.round((1 + currentProgress * 0.14) * 1000) / 1000;
        beam.style.transform = `translate3d(0, ${scrollLift}px, 0) rotate(${baseRotate + scrollSpread}deg) scaleX(${scrollScale})`;

      });

      element.dataset.scrollProgress = String(Math.round(currentProgress * 1000) / 1000);
      scrollRafRef.current = window.requestAnimationFrame(applyScrollTransform);
    };

    scrollRafRef.current = window.requestAnimationFrame(applyScrollTransform);

    return () => {
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  const beams = [
    {
      width: '182vw',
      height: '54vh',
      top: '-21vh',
      rotate: 7,
      opacity: 0.54,
      blur: 'blur-[18px]',
      brightness: 1.06,
      color: 'rgba(255, 201, 73, 0.62)',
    },
    {
      width: '180vw',
      height: '56vh',
      top: '-2vh',
      rotate: 15,
      opacity: 0.46,
      blur: 'blur-[18px]',
      brightness: 1.05,
      color: 'rgba(255, 240, 95, 0.52)',
    },
    {
      width: '178vw',
      height: '58vh',
      top: '16vh',
      rotate: 24,
      opacity: 0.4,
      blur: 'blur-[18px]',
      brightness: 1.04,
      color: 'rgba(144, 219, 255, 0.42)',
    },
    {
      width: '176vw',
      height: '60vh',
      top: '34vh',
      rotate: 34,
      opacity: 0.34,
      blur: 'blur-[18px]',
      brightness: 1.03,
      color: 'rgba(255, 176, 144, 0.34)',
    },
    {
      width: '174vw',
      height: '62vh',
      top: '52vh',
      rotate: 45,
      opacity: 0.3,
      blur: 'blur-[18px]',
      brightness: 1.03,
      color: 'rgba(188, 162, 255, 0.28)',
    },
  ];

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-end pb-10 px-6 text-center relative overflow-hidden bg-[#fbfaf6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(251,250,246,0.96)_34%,rgba(248,247,243,0.92)_72%,rgba(244,243,239,0.88)_100%)]" />

      {/* Atmospheric glow and light structure */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 -top-28 h-[34rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(255,236,151,0.92)_0%,rgba(255,184,55,0.54)_30%,rgba(126,221,255,0.16)_54%,rgba(255,255,255,0)_76%)] blur-[34px]" />

        <div className="absolute -left-14 -top-12 h-44 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(255,231,119,0.78)_34%,rgba(255,184,55,0.3)_64%,rgba(255,255,255,0)_100%)] blur-[18px]" />

        <div className="absolute left-0 top-0 h-[150vh] w-[180vw] origin-top-left">
          <div
            ref={beamStageRef}
            data-hero-beam-stage
            className="relative h-full w-full origin-top-left"
          >
            <div
              className="hero-beam-stage relative h-full w-full origin-top-left"
            >
              {beams.map((beam, i) => {
                const opacity = Math.round(beam.opacity * 100) / 100;
                const rotate = Math.round(beam.rotate);

                return (
                  <div
                    key={i}
                    ref={(element) => {
                      beamRefs.current[i] = element;
                    }}
                    data-hero-beam
                    data-base-rotate={rotate}
                    className="absolute left-[-8vw] origin-top-left"
                    style={{
                      top: beam.top,
                      width: beam.width,
                      height: beam.height,
                      opacity,
                      transform: `translate3d(0, 0, 0) rotate(${rotate}deg)`,
                      transformOrigin: '0% 0%',
                    }}
                  >
                    <div
                      className={`${beam.blur} absolute inset-0`}
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 56%)',
                        background: `linear-gradient(90deg, ${beam.color} 0%, ${beam.color} 92%, rgba(255,255,255,0.02) 98%, rgba(255,255,255,0) 100%)`,
                        filter: `saturate(1.18) contrast(1.04) brightness(${beam.brightness})`,
                        backfaceVisibility: 'hidden',
                      }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 w-[82%]"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 58%)',
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 80%, rgba(255,255,255,0) 100%)',
                        opacity: i <= 1 ? 0.1 : 0.06,
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[linear-gradient(180deg,rgba(251,250,246,0)_0%,rgba(251,250,246,0.58)_38%,rgba(251,250,246,0.92)_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,0,0,0.32) 0.6px, transparent 0.6px)',
            backgroundSize: '6px 6px',
          }}
        />

        <div className="absolute left-[12%] top-[16%] h-72 w-96 rounded-full bg-yellow-200/22 blur-[36px]" />
        <div className="absolute left-[38%] top-[20%] h-72 w-[32rem] rounded-full bg-pastel-blue/10 blur-[38px]" />
      </div>

      <div className="relative z-10 w-full max-w-[100vw] mx-auto translate-y-4 md:translate-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-5 text-xl md:text-2xl font-medium text-black/40 tracking-tight"
        >
          I build things people <span className="text-black">want to stay for.</span>
        </motion.p>

        <div className="flex w-full origin-bottom scale-x-[1.12] scale-y-[1.12] flex-nowrap items-baseline justify-center sm:scale-x-100 sm:scale-y-100">
          {letters.map((item, idx) => (
            <div 
              key={idx} 
              className="relative inline-block group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={clearHoverIfPointerSupportsHover}
              onClick={() => {
                if (item.element) {
                  setHoveredIndex((current) => current === idx ? null : idx);
                }
              }}
            >
              <AnimatePresence>
                {hoveredIndex === idx && item.element && (
                  elements[item.element as keyof typeof elements]
                )}
              </AnimatePresence>
              <motion.span 
                whileHover={{ 
                  scale: 1.105, 
                  y: -11,
                  rotate: idx % 2 === 0 ? 2.5 : -2.5,
                  transition: { type: 'spring', stiffness: 640, damping: 22 }
                }}
                className={`
                  text-[17.8vw] sm:text-[19vw] font-display font-black leading-[0.78] tracking-[-0.095em] sm:tracking-[-0.055em] cursor-default
                  transition-colors duration-300 select-none relative
                  ${item.char === ' ' ? 'mx-[0.7vw] sm:mx-[3vw]' : ''}
                `}
                style={{
                  color: hoveredIndex === idx && item.char !== ' '
                    ? pastelHexColors[idx % pastelHexColors.length]
                    : undefined,
                  textShadow: hoveredIndex === idx 
                    ? `0 2px 0 rgba(255,255,255,0.8), 0 12px 24px rgba(0,0,0,0.12), 0 24px 44px rgba(255,243,196,0.18)` 
                    : 'none',
                  filter: hoveredIndex === idx
                    ? 'drop-shadow(0 10px 18px rgba(0,0,0,0.08))'
                    : 'none',
                }}
              >
                {item.char}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
