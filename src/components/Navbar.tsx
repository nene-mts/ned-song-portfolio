import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Story', href: '#story' },
    { name: 'Process', href: '#process' },
    { name: 'Connect', href: '#connect' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-3 left-1/2 z-50 w-[calc(100vw-1rem)] max-w-max -translate-x-1/2 sm:top-6 sm:w-auto"
    >
      <div className="mx-auto flex w-full items-center justify-center gap-1 rounded-full border border-white/10 bg-black/80 px-2 py-1.5 shadow-xl backdrop-blur-md sm:w-auto sm:gap-2 sm:px-4 sm:py-2">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-black tracking-[-0.04em] text-pastel-peach transition-colors hover:bg-white/20 sm:h-9 sm:w-9 sm:text-xs"
          aria-label="Back to top"
        >
          NS
        </a>
        <div className="flex min-w-0 items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-xs font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm",
                item.name === 'Connect' && "bg-pastel-blue px-3 font-bold text-black hover:bg-pastel-purple hover:text-black sm:px-4"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
