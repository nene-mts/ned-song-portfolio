import { motion } from 'motion/react';
import { FileText, Mail, Linkedin } from 'lucide-react';

function WeChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.5 17.5C6.4 17.5 3 14.9 3 11.7C3 8.5 6.4 6 10.5 6C14.6 6 18 8.5 18 11.7C18 14.9 14.6 17.5 10.5 17.5Z" />
      <path d="M7 17L5.3 20L9 17.3" />
      <path d="M14 15.7C14.9 17.4 16.9 18.6 19.2 18.6" />
      <path d="M18.5 18.4L20.7 20L19.7 17.9" />
      <path d="M16.3 9.2C19 9.6 21 11.4 21 13.8C21 15.3 20.2 16.6 18.9 17.4" />
      <path d="M8.1 10.8H8.2" />
      <path d="M12.8 10.8H12.9" />
    </svg>
  );
}

export default function Connect() {
  return (
    <section id="connect" className="py-40 px-6 text-center bg-[#fcfcfc]">
      <div className="max-w-5xl mx-auto relative">
        <motion.svg
          initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute right-0 top-12 hidden h-24 w-24 text-pastel-purple md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            d="M50 18V82M18 50H82M28 28L72 72M72 28L28 72"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter">
            Let’s build something<br />
            <span className="text-pastel-blue">meaningful</span> together.
          </h2>
          <p className="text-xl text-black/50 font-medium max-w-2xl mx-auto">
            I’m always open to new opportunities,<br />
            especially in marketing, growth, and digital strategy.
          </p>
        </motion.div>

        {/* Playful Connect Button Section */}
        <div className="mb-32 flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Doodle Lines (Left) */}
            <svg className="absolute -left-24 top-2 w-28 h-28 text-[#D7CCFF] opacity-0 scale-90 -rotate-6 group-hover:opacity-100 group-hover:scale-100 transition-all duration-220 pointer-events-none" viewBox="0 0 100 100">
              <motion.path
                d="M86,24 C68,18 50,24 34,14 M80,46 C62,40 42,48 24,34 M72,70 C58,62 42,66 30,56"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileHover={{ pathLength: 1 }}
                transition={{ duration: 0.34, ease: "easeOut" }}
              />
            </svg>

            {/* Doodle Lines (Right) */}
            <svg className="absolute -right-28 bottom-0 w-32 h-32 text-[#C7F28D] opacity-0 scale-90 rotate-6 group-hover:opacity-100 group-hover:scale-100 transition-all duration-220 pointer-events-none" viewBox="0 0 100 100">
              <motion.path
                d="M16,18 Q34,38 18,58 Q36,78 20,98 M40,14 Q56,34 40,54 Q58,74 42,94 M62,26 Q78,46 64,66"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileHover={{ pathLength: 1 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              />
            </svg>

            <div className="absolute inset-0 -z-10 rounded-full bg-[#F2FF8E] blur-3xl opacity-0 scale-90 group-hover:opacity-40 group-hover:scale-125 transition-all duration-220" />
            <div className="absolute inset-0 -z-10 rounded-full bg-[#A5D8FF] blur-2xl opacity-0 scale-95 group-hover:opacity-25 group-hover:scale-115 transition-all duration-220" />

            {/* The Button */}
            <motion.a
              href="mailto:songmantoushen@gmail.com"
              whileHover={{ scale: 1.06, y: -6, rotate: -2.5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className="relative z-10 block px-20 py-8 bg-[#1a1a1a] rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-180 border-b-4 border-black group-hover:bg-[#F1FF63] group-hover:border-[#99C93C] group-hover:shadow-[0_22px_55px_-18px_rgba(182,255,69,0.72)]"
            >
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0))] opacity-0 group-hover:opacity-100 transition-opacity duration-180" />
              <span className="relative z-10 text-5xl md:text-7xl font-display font-black text-pastel-peach tracking-tighter transition-colors duration-180 group-hover:text-black">
                Connect
              </span>
              
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.3),rgba(255,255,255,0)_68%)] opacity-0 group-hover:opacity-100 transition-opacity duration-180" />
            </motion.a>

            {/* Outer Glow Background */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-35 transition-all duration-220 -z-10 scale-150 bg-[radial-gradient(circle,rgba(241,255,99,0.75)_0%,rgba(178,242,187,0.24)_45%,rgba(255,255,255,0)_78%)]" />
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-8">
            {[
              { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#5CA8E8]' },
              { name: 'Email', icon: Mail, href: 'mailto:songmantoushen@gmail.com', color: 'hover:text-[#F2A55F]' },
              { name: 'WeChat', icon: WeChatIcon, href: '#', color: 'hover:text-[#49C85F]' },
              { name: 'CV', icon: FileText, href: '/resume.pdf', color: 'hover:text-pastel-blue', target: '_blank' },
            ].map((social) => (
              <motion.a 
                key={social.name} 
                href={social.href}
                target={social.target}
                rel={social.target ? 'noreferrer' : undefined}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`group relative w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 ${social.color}`}
                title={social.name}
              >
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border border-black/8 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black/50 opacity-0 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.25)] transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                  {social.name}
                </span>
                <social.icon className="w-6 h-6 text-current transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-black/30 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 Ned Song. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
