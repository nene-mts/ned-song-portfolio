import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowDown, Play } from 'lucide-react';
import { Project, ProjectMedia } from '../types';
import { useRef } from 'react';

interface ProjectOverlayProps {
  project: Project | null;
  onClose: () => void;
}

const aspectClasses: Record<NonNullable<ProjectMedia['aspect']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  phone: 'aspect-[9/16]',
  auto: ''
};

export default function ProjectOverlay({ project, onClose }: ProjectOverlayProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  if (!project) return null;

  const scrollToContent = () => {
    contentRef.current?.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  };

  const renderSectionHeader = (section: Project['sections'][number], idx: number, align: 'default' | 'center' = 'default') => (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {section?.kicker && (
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-black/30">
          {section.kicker}
        </p>
      )}
      <h3 className={`text-3xl font-display font-black ${align === 'center' ? '' : 'flex items-center gap-4'} mb-4`}>
        {align === 'default' && <span className="text-pastel-purple text-xl">0{idx + 1}</span>}
        {section?.title}
      </h3>
      <p className="text-lg text-black/60 leading-relaxed font-medium">
        {section?.content}
      </p>
      {section?.note && (
        <div className={`mt-6 rounded-[1.5rem] border border-black/6 bg-[#faf9f5] px-5 py-4 ${align === 'center' ? 'text-left' : ''}`}>
          <p className="text-sm leading-relaxed text-black/55 whitespace-pre-line">
            {section.note}
          </p>
        </div>
      )}
      {section?.ctaLabel && section?.ctaUrl && (
        <a
          href={section.ctaUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-black/12 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black/70 transition-all hover:-translate-y-0.5 hover:bg-pastel-green hover:text-black"
        >
          {section.ctaLabel}
        </a>
      )}
    </div>
  );

  const renderMediaCard = (item: ProjectMedia, sectionTitle: string, index: number) => {
    const aspectClass = aspectClasses[item.aspect ?? 'video'];
    const cardSpan = item.featured ? 'md:col-span-2' : '';
    const isPhone = item.aspect === 'phone';
    const widthClass = item.featured && isPhone ? 'md:mx-auto md:max-w-[24rem]' : '';
    const containMedia = item.fit === 'contain';
    const mediaFitClass = containMedia ? 'object-contain' : 'object-cover';
    const mediaFrameClass = containMedia ? 'bg-[#fffdf7] p-4 sm:p-6' : (isPhone ? 'bg-[#121212]' : 'bg-[#f0f0ea]');

    return (
      <motion.article
        key={`${sectionTitle}-${index}-${item.url}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6, rotate: item.featured ? 0 : index % 2 === 0 ? 0.8 : -0.8 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`group relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#f8f8f5] shadow-[0_16px_50px_-28px_rgba(0,0,0,0.2)] ${cardSpan} ${widthClass}`}
      >
        <div className="pointer-events-none absolute inset-x-5 top-5 z-10 flex items-center justify-between">
          <span className="rounded-full bg-white/88 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-black/45 shadow-sm backdrop-blur-sm">
            {item.type === 'video' ? 'Video' : 'Still'}
          </span>
          {item.type === 'video' && (
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-lg">
              <Play className="h-4 w-4 fill-current" />
            </span>
          )}
        </div>

        {item.type === 'image' ? (
          <div className={`${aspectClass} overflow-hidden ${mediaFrameClass}`}>
            <img
              src={item.url}
              alt={item.caption ?? `${sectionTitle} media ${index + 1}`}
              className={`h-full w-full ${mediaFitClass} transition-transform duration-700 group-hover:scale-[1.03] ${aspectClass ? '' : 'h-auto'}`}
              style={{ objectPosition: 'center center' }}
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className={`${aspectClass} overflow-hidden ${containMedia ? 'bg-[#fffdf7] p-4 sm:p-6' : 'bg-black'}`}>
            <video
              src={item.url}
              poster={item.poster}
              controls
              preload="metadata"
              playsInline
              className={`h-full w-full ${mediaFitClass}`}
              style={{ objectPosition: 'center center' }}
            />
          </div>
        )}

        {item.caption && (
          <div className="border-t border-black/6 bg-white/86 px-5 py-4 backdrop-blur-sm">
            <p className="text-sm font-medium leading-relaxed text-black/65">
              {item.caption}
            </p>
          </div>
        )}
      </motion.article>
    );
  };

  const isWoolworths = project.id === 'woolworths';
  const isMissGreen = project.id === 'missgreen';

  const renderMissGreenMedia = (item: ProjectMedia, className?: string, mediaClassName?: string, label = true) => {
    const containMedia = item.fit === 'contain';
    const wrapperClass = containMedia ? 'bg-[#fffdf7]' : 'bg-[#f4f1e8]';
    const mediaFitClass = containMedia ? 'object-contain' : 'object-cover';

    return (
      <motion.figure
        key={item.url}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`group relative overflow-hidden rounded-[1.8rem] border border-black/8 bg-white shadow-[0_16px_42px_-28px_rgba(0,0,0,0.24)] ${className ?? ''}`}
      >
        {label && (
          <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-black/40 shadow-sm backdrop-blur-sm">
            {item.type === 'video' ? 'Video' : 'Still'}
          </span>
        )}

        <div className={`${wrapperClass} ${mediaClassName ?? ''}`}>
          {item.type === 'image' ? (
            <img
              src={item.url}
              alt={item.caption ?? project.title}
              className={`h-full w-full ${mediaFitClass}`}
              referrerPolicy="no-referrer"
            />
          ) : (
            <video
              src={item.url}
              poster={item.poster}
              controls
              preload="metadata"
              playsInline
              className={`h-full w-full ${mediaFitClass}`}
            />
          )}
        </div>

        {item.caption && (
          <figcaption className="border-t border-black/6 bg-white/90 px-5 py-4 text-sm font-medium leading-relaxed text-black/65">
            {item.caption}
          </figcaption>
        )}
      </motion.figure>
    );
  };

  const renderMissGreenSection = (section: Project['sections'][number], idx: number) => {
    if (!section) return null;

    if (idx === 0) {
      const posterItems = section.media ?? [];
      return (
        <section key={idx} className="space-y-10">
          {renderSectionHeader(section, idx)}

          <div className="relative -mx-2 sm:-mx-8 lg:-mx-12">
            <svg className="absolute -left-2 top-8 h-16 w-16 text-pastel-green/70" viewBox="0 0 100 100" fill="none">
              <path d="M20 60C34 38 58 70 80 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <svg className="absolute -right-3 top-10 h-16 w-16 text-pastel-yellow/75" viewBox="0 0 100 100" fill="none">
              <path d="M28 30L36 44L52 48L36 52L28 66L20 52L4 48L20 44L28 30Z" fill="currentColor" />
            </svg>
            <svg className="absolute -left-4 bottom-8 h-16 w-16 text-pastel-peach/75" viewBox="0 0 100 100" fill="none">
              <path d="M24 60C34 34 66 34 76 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M34 72C44 66 56 66 66 72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>

            <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
              {posterItems.map((item, mediaIdx) => {
                const tilt = ['-rotate-2', 'rotate-[1.8deg]', '-rotate-[1.2deg]', 'rotate-[1.1deg]', 'rotate-[1.6deg]', '-rotate-[1deg]', 'rotate-[0.8deg]', '-rotate-[1.4deg]'][mediaIdx % 8];
                const scale = mediaIdx === 6 ? 'sm:scale-[1.04]' : mediaIdx === 7 ? 'sm:scale-[0.98]' : '';
                const isVideo = item.type === 'video';

                return (
                  <motion.div
                    key={item.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -6, rotate: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`mb-3 break-inside-avoid sm:mb-4 ${tilt} ${scale}`}
                  >
                    <div className="overflow-hidden rounded-[1.25rem] border border-black/8 bg-white p-1.5 shadow-[0_18px_38px_-26px_rgba(0,0,0,0.28)] sm:rounded-[1.5rem]">
                      <div className={`${isVideo ? 'mx-auto max-w-[16rem]' : ''} overflow-hidden rounded-[0.95rem] bg-[#fffdf7] sm:rounded-[1.15rem]`}>
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt={item.caption ?? section.title}
                            className="h-auto w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <video
                            src={item.url}
                            poster={item.poster}
                            controls
                            preload="metadata"
                            playsInline
                            className="h-auto w-full object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }

    if (idx === 1) {
      const [cardA, cardB, socialShot] = section.media ?? [];

      return (
        <section key={idx} className="space-y-10">
          {renderSectionHeader(section, idx)}

          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 sm:gap-5 xl:flex-nowrap xl:gap-0">
            {cardA && (
              <div className="w-full max-w-[19rem] rotate-[-4deg] xl:mr-[-2.4rem] xl:w-[29%] xl:translate-y-12">
                {renderMissGreenMedia(cardA, '', 'p-2', false)}
              </div>
            )}

            {socialShot && (
              <div className="relative z-10 w-full max-w-[24rem] xl:w-[35%] xl:translate-y-0">
                {renderMissGreenMedia(socialShot, '', 'p-2', true)}
              </div>
            )}

            {cardB && (
              <div className="w-full max-w-[19rem] rotate-[4deg] xl:ml-[-2.4rem] xl:w-[29%] xl:translate-y-14">
                {renderMissGreenMedia(cardB, '', 'p-2', false)}
              </div>
            )}
          </div>
        </section>
      );
    }

    if (idx === 2) {
      const cards = section.media ?? [];

      return (
        <section key={idx} className="space-y-10">
          {renderSectionHeader(section, idx)}

          <div className="relative flex min-h-[24rem] items-center justify-center py-2 sm:min-h-[26rem] sm:py-4">
            <div className="relative hidden h-[24rem] w-full max-w-[64rem] md:block">
              {cards.map((item, mediaIdx) => {
                const spread = [
                  'left-[2%] top-[20%] z-10 w-[30%] rotate-[-15deg] origin-bottom',
                  'left-[23%] top-[9%] z-20 w-[29%] rotate-[-6deg] origin-bottom',
                  'right-[23%] top-[9%] z-20 w-[29%] rotate-[6deg] origin-bottom',
                  'right-[2%] top-[20%] z-10 w-[30%] rotate-[15deg] origin-bottom'
                ][mediaIdx];

                return (
                  <motion.div
                    key={item.url}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
                    transition={{ duration: 0.42, ease: 'easeOut' }}
                    className={`absolute ${spread}`}
                  >
                    <div className="overflow-hidden rounded-[1.7rem] border border-black/8 bg-white p-2 shadow-[0_24px_48px_-26px_rgba(0,0,0,0.24)]">
                      <img src={item.url} alt={section.title} className="h-auto w-full rounded-[1rem] object-contain" referrerPolicy="no-referrer" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid w-full gap-4 md:hidden sm:grid-cols-2">
              {cards.map((item) => renderMissGreenMedia(item, '', 'p-2'))}
            </div>
          </div>
        </section>
      );
    }

    if (idx === 3) {
      const [logo, ...eventItems] = section.media ?? [];
      const talkImage = eventItems[eventItems.length - 1];
      const biohackingItems = talkImage ? eventItems.slice(0, -1) : eventItems;

      return (
        <section key={idx} className="space-y-10">
          {renderSectionHeader(section, idx)}

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {logo && (
                  <div className="flex items-center gap-3 rounded-full border border-black/8 bg-[#f8f7f1] px-4 py-3 shadow-[0_10px_28px_-22px_rgba(0,0,0,0.2)]">
                  <img src={logo.url} alt="Biohacking Ventures" className="h-10 w-10 object-contain" referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-black/35">Sub-brand</p>
                    <p className="text-sm font-bold text-black/70">Biohacking Ventures</p>
                  </div>
                </div>
              )}
              <div className="rounded-full border border-black/8 bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-black/45 shadow-[0_10px_28px_-22px_rgba(0,0,0,0.18)]">
                Live event delivery + speaker support + bilingual operations
              </div>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.34fr)_minmax(320px,0.82fr)]">
              <div className="relative hidden min-h-[40rem] lg:block">
                {biohackingItems[1] && (
                  <div className="absolute left-[24%] top-[1%] z-20 w-[48%]">
                    {renderMissGreenMedia(biohackingItems[1], '', 'p-2', true)}
                  </div>
                )}
                {biohackingItems[0] && (
                  <div className="absolute bottom-[7%] left-[2%] z-10 w-[46%]">
                    {renderMissGreenMedia(biohackingItems[0], '', 'p-2', true)}
                  </div>
                )}
                {biohackingItems[2] && (
                  <div className="absolute bottom-[2%] right-[2%] z-10 w-[46%]">
                    {renderMissGreenMedia(biohackingItems[2], '', 'p-2', true)}
                  </div>
                )}
              </div>

              <div className="grid gap-4 lg:hidden sm:grid-cols-3">
                {biohackingItems.map((item) => (
                  <div key={item.url}>
                    {renderMissGreenMedia(item, '', 'p-2', true)}
                  </div>
                ))}
              </div>

              {talkImage && (
                <div className="lg:pt-10">
                  {renderMissGreenMedia(talkImage, '', 'p-2 sm:p-3', true)}
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }

    if (idx === 4) {
      const [siteImage, miniProgram] = section.media ?? [];

      return (
        <section key={idx} className="space-y-10">
          {renderSectionHeader(section, idx)}

          <div className="space-y-5 xl:hidden">
            {siteImage && (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="overflow-hidden rounded-[2.1rem] border border-black/8 bg-white shadow-[0_18px_44px_-28px_rgba(0,0,0,0.24)]"
              >
                <div className="border-b border-black/6 bg-[#f4f2ea] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff8b7b]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffd86f]" />
                    <span className="h-3 w-3 rounded-full bg-[#9bdf9a]" />
                  </div>
                </div>
                <div className="bg-[#fffdf7] p-2 sm:p-3">
                  <img
                    src={siteImage.url}
                    alt={siteImage.caption ?? section.title}
                    className="h-auto w-full rounded-[1.2rem] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {siteImage.caption && (
                  <div className="border-t border-black/6 bg-white/90 px-5 py-4 text-sm font-medium leading-relaxed text-black/65">
                    {siteImage.caption}
                  </div>
                )}
              </motion.article>
            )}

            {miniProgram && (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="mx-auto flex w-full max-w-[22rem] items-center justify-center rounded-[2.3rem] border border-[#ddd7ca] bg-[#faf7ef] p-2.5 shadow-[0_22px_48px_-30px_rgba(0,0,0,0.24)]"
              >
                <div className="w-full overflow-hidden rounded-[1.9rem] border border-[#ece4d6] bg-white">
                  <video
                    src={miniProgram.url}
                    poster={miniProgram.poster}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-[9/16] h-auto w-full object-contain bg-[#fcfaf4]"
                  />
                  {miniProgram.caption && (
                    <div className="border-t border-black/6 bg-white px-4 py-4 text-sm font-medium leading-relaxed text-black/72">
                      {miniProgram.caption}
                    </div>
                  )}
                </div>
              </motion.article>
            )}
          </div>

          <div className="relative hidden min-h-[42rem] xl:block">
            {siteImage && (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute left-0 top-0 z-10 w-[82%] overflow-hidden rounded-[2.1rem] border border-black/8 bg-white shadow-[0_18px_44px_-28px_rgba(0,0,0,0.24)]"
              >
                <div className="border-b border-black/6 bg-[#f4f2ea] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff8b7b]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffd86f]" />
                    <span className="h-3 w-3 rounded-full bg-[#9bdf9a]" />
                  </div>
                </div>
                <div className="bg-[#fffdf7] p-2 sm:p-3">
                  <img
                    src={siteImage.url}
                    alt={siteImage.caption ?? section.title}
                    className="h-auto w-full rounded-[1.2rem] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {siteImage.caption && (
                  <div className="border-t border-black/6 bg-white/90 px-5 py-4 text-sm font-medium leading-relaxed text-black/65">
                    {siteImage.caption}
                  </div>
                )}
              </motion.article>
            )}

            {miniProgram && (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute right-0 top-[4%] z-20 flex w-[32%] max-w-[23rem] items-center justify-center rounded-[2.3rem] border border-[#ddd7ca] bg-[#faf7ef] p-2.5 shadow-[0_22px_48px_-30px_rgba(0,0,0,0.24)]"
              >
                <div className="w-full overflow-hidden rounded-[1.9rem] border border-[#ece4d6] bg-white">
                  <video
                    src={miniProgram.url}
                    poster={miniProgram.poster}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-[9/16] h-auto w-full object-contain bg-[#fcfaf4]"
                  />
                  {miniProgram.caption && (
                    <div className="border-t border-black/6 bg-white px-4 py-4 text-sm font-medium leading-relaxed text-black/72">
                      {miniProgram.caption}
                    </div>
                  )}
                </div>
              </motion.article>
            )}
          </div>
        </section>
      );
    }

    if (idx === 5) {
      const guidelineImages = section.media ?? [];

      return (
        <section key={idx} className="space-y-10">
          {renderSectionHeader(section, idx)}

          <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.76fr)]">
            <div className="relative grid gap-0 xl:self-stretch xl:py-2">
              {guidelineImages.map((item, mediaIdx) => (
                <div
                  key={item.url}
                  className={`relative w-full ${
                    mediaIdx === 0
                      ? 'z-10 -rotate-[1.2deg]'
                      : mediaIdx === 1
                        ? 'z-20 -mt-3 translate-x-4 rotate-[0.8deg] sm:translate-x-8 xl:-mt-5'
                        : 'z-30 -mt-3 -translate-x-2 rotate-[-0.6deg] sm:-translate-x-4 xl:-mt-5'
                  }`}
                >
                  <motion.figure
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -6, rotate: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="overflow-hidden rounded-[1.4rem] border border-black/8 bg-white p-1.5 shadow-[0_18px_42px_-28px_rgba(0,0,0,0.26)] sm:rounded-[1.65rem]"
                  >
                    <div className="aspect-[16/8.2] overflow-hidden rounded-[1rem] bg-[#fffdf7] sm:rounded-[1.2rem]">
                      <img
                        src={item.url}
                        alt={section.title}
                        className="h-full w-full object-cover"
                        style={{
                          objectPosition: mediaIdx === 1 ? '48% 46%' : mediaIdx === 2 ? '58% 50%' : '50% 50%',
                          transform: `scale(${mediaIdx === 1 ? 1.42 : mediaIdx === 2 ? 1.16 : 1.12})`
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.figure>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-[linear-gradient(135deg,#f7f5ee_0%,#fffdf7_100%)] p-7 shadow-[0_16px_42px_-28px_rgba(0,0,0,0.2)] xl:min-h-[35rem] xl:self-center xl:px-8 xl:py-8">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-black/30">Strategy insight</p>
              <h4 className="text-2xl font-display font-black leading-tight text-black">Using data to rebuild the menu story</h4>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/65">
                <p>I pulled recent sales and product mix data after the shift into a more delivery-led model, then used that analysis to identify why certain drinks and products were losing momentum.</p>
                <p>The key issue was not just demand. It was clarity. Customers needed a clearer reason to choose each category, especially in a marketplace environment where function and intent have to be understood quickly.</p>
                <p>That led to a more reason-based structure: stronger product groupings, functional naming, and bundle logic that made the menu easier to understand and easier to convert from.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Plant protein', 'Gut-friendly', '8-hour energy', 'Reason-based bundles'].map((tag) => (
                  <span key={tag} className="rounded-full border border-black/8 bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black/45">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`relative bg-white w-full ${isMissGreen ? 'max-w-6xl' : 'max-w-5xl'} h-[90vh] sm:h-[95vh] rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0 bg-white/80 backdrop-blur-md z-10">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-1">{project.category}</p>
                <h2 className="text-2xl sm:text-3xl font-display font-black">{project.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div 
              ref={contentRef}
              className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth"
            >
              {/* Hero Image in Overlay */}
              <div className={`${isMissGreen ? 'w-full min-h-[28rem] overflow-hidden bg-[linear-gradient(135deg,#f7f6f1_0%,#efefe7_100%)]' : 'w-full aspect-video sm:aspect-[21/9] overflow-hidden bg-[linear-gradient(135deg,#f7f6f1_0%,#efefe7_100%)]'}`}>
                {project.coverStyle === 'card' ? (
                  <div className="relative flex h-full w-full items-center justify-center px-6 py-8 sm:px-12">
                    <svg className="absolute left-8 top-10 h-24 w-24 text-pastel-yellow/70" viewBox="0 0 100 100" fill="none">
                      <path d="M18 50C34 24 60 18 78 34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M34 72C48 64 58 64 72 72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <svg className="absolute right-10 top-16 h-28 w-28 text-pastel-blue/70" viewBox="0 0 100 100" fill="none">
                      <path d="M20 30L36 46L20 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M54 20L76 42L54 64" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="absolute bottom-10 right-20 h-20 w-20 text-pastel-peach/80" viewBox="0 0 100 100" fill="none">
                      <path d="M26 56C38 26 66 22 76 44C82 58 74 74 58 76C42 78 28 70 26 56Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <div className="relative w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)]">
                      <div className="aspect-[16/25] overflow-hidden bg-white p-3">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                ) : project.coverStyle === 'character' ? (
                  <div className="relative flex h-full w-full items-center justify-center px-6 py-8 sm:px-12">
                    <svg className="absolute left-10 top-12 h-28 w-28 text-pastel-green/75" viewBox="0 0 100 100" fill="none">
                      <path d="M18 58C30 34 54 68 76 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M72 28L72 42L58 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="absolute right-12 top-20 h-32 w-32 text-pastel-yellow/75" viewBox="0 0 100 100" fill="none">
                      <path d="M28 30L36 44L52 48L36 52L28 66L20 52L4 48L20 44L28 30Z" fill="currentColor" />
                    </svg>
                    <svg className="absolute bottom-10 right-24 h-24 w-24 text-pastel-peach/80" viewBox="0 0 100 100" fill="none">
                      <path d="M26 56C38 26 66 22 76 44C82 58 74 74 58 76C42 78 28 70 26 56Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <svg className="absolute bottom-14 left-20 h-24 w-24 text-pastel-blue/80" viewBox="0 0 100 100" fill="none">
                      <path d="M22 46H74" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M36 32L22 46L36 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="absolute left-1/3 top-10 h-20 w-20 text-black/75" viewBox="0 0 100 100" fill="none">
                      <path d="M24 30C40 24 58 24 74 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M30 50C44 44 56 44 70 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative z-10 h-[20rem] sm:h-[23rem] md:h-[25rem] w-auto object-contain drop-shadow-[0_22px_36px_rgba(0,0,0,0.18)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : project.coverStyle === 'centered' ? (
                  <div className={`relative flex w-full items-center justify-center px-6 py-8 sm:px-12 ${isMissGreen ? 'min-h-[28rem] sm:min-h-[34rem]' : 'h-full'}`}>
                    <svg className="absolute left-10 top-10 h-28 w-28 text-pastel-green/75" viewBox="0 0 100 100" fill="none">
                      <path d="M18 58C30 34 54 68 76 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M72 28L72 42L58 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="absolute left-24 bottom-12 h-24 w-24 text-pastel-peach/80" viewBox="0 0 100 100" fill="none">
                      <path d="M24 60C34 34 66 34 76 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M34 72C44 66 56 66 66 72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <svg className="absolute right-14 top-12 h-24 w-24 text-pastel-yellow/75" viewBox="0 0 100 100" fill="none">
                      <path d="M28 30L36 44L52 48L36 52L28 66L20 52L4 48L20 44L28 30Z" fill="currentColor" />
                    </svg>
                    <svg className="absolute right-16 bottom-10 h-28 w-28 text-pastel-blue/70" viewBox="0 0 100 100" fill="none">
                      <path d="M20 30L36 46L20 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M54 20L76 42L54 64" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="absolute left-1/3 top-8 h-20 w-20 text-black/70" viewBox="0 0 100 100" fill="none">
                      <path d="M30 30L70 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M70 30L30 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <div className={`relative w-full ${isMissGreen ? 'max-w-[34rem] sm:max-w-[40rem] md:max-w-[44rem]' : 'max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem]'} overflow-hidden rounded-[2rem] border border-black/8 bg-white/90 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.28)]`}>
                      <div className={`overflow-hidden bg-white ${isMissGreen ? 'p-3 sm:p-4' : 'p-4 sm:p-5'}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full object-contain ${isMissGreen ? 'max-h-[30rem] sm:max-h-[34rem]' : 'h-full'}`}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full ${project.coverFit === 'cover' ? 'object-cover' : 'object-contain p-10 sm:p-16'}`}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              <div className={`${isMissGreen ? 'max-w-5xl p-6 sm:px-12 sm:py-14 lg:px-14' : 'max-w-4xl p-6 sm:p-16'} mx-auto`}>
                <div className="mb-20">
                  <p className="text-2xl sm:text-4xl text-black font-display font-black leading-tight mb-8">
                    {project.intro}
                  </p>
                  
                  <button 
                    onClick={scrollToContent}
                    className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-pastel-blue hover:text-black transition-all flex items-center gap-2"
                  >
                    Explore Project <ArrowDown className="w-4 h-4" />
                  </button>
                </div>

                <div className={isMissGreen ? 'space-y-28' : 'space-y-32'}>
                  {project.sections?.map((section, idx) => {
                    if (isMissGreen) {
                      return renderMissGreenSection(section, idx);
                    }

                    const isWoolworthsStory = isWoolworths && idx < 3;
                    const storyImage = isWoolworthsStory ? section.media?.[0] : null;
                    const reverseLayout = idx % 2 === 1;

                    if (isWoolworthsStory && storyImage) {
                      return (
                        <div key={idx} className="space-y-10">
                          <div className={`grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] ${reverseLayout ? 'lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)]' : ''}`}>
                            {!reverseLayout && (
                              <div className="max-w-2xl">
                                {section.kicker && (
                                  <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-black/30">
                                    {section.kicker}
                                  </p>
                                )}
                                <h3 className="text-3xl font-display font-black flex items-center gap-4 mb-4">
                                  <span className="text-pastel-purple text-xl">0{idx + 1}</span>
                                  {section.title}
                                </h3>
                                <p className="text-lg text-black/60 leading-relaxed font-medium">
                                  {section.content}
                                </p>
                                {section.note && (
                                  <div className="mt-6 rounded-[1.5rem] border border-black/6 bg-[#faf9f5] px-5 py-4">
                                    <p className="text-sm leading-relaxed text-black/55 whitespace-pre-line">
                                      {section.note}
                                    </p>
                                  </div>
                                )}
                                {section.ctaLabel && section.ctaUrl && (
                                  <a
                                    href={section.ctaUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center rounded-full border border-black/12 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black/70 transition-all hover:-translate-y-0.5 hover:bg-pastel-green hover:text-black"
                                  >
                                    {section.ctaLabel}
                                  </a>
                                )}
                              </div>
                            )}

                            <motion.article
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              whileHover={{ y: -6, rotate: reverseLayout ? -0.8 : 0.8 }}
                              transition={{ duration: 0.45, ease: 'easeOut' }}
                              className={`group overflow-hidden rounded-[2rem] border border-black/8 bg-[#f8f8f5] shadow-[0_16px_50px_-28px_rgba(0,0,0,0.2)] ${reverseLayout ? 'lg:order-first' : ''}`}
                            >
                              <div className="aspect-[2/3] overflow-hidden bg-[#fffdf7] p-4 sm:p-5">
                                <img
                                  src={storyImage.url}
                                  alt={section.title}
                                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </motion.article>

                            {reverseLayout && (
                              <div className="max-w-2xl lg:justify-self-end">
                                {section.kicker && (
                                  <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-black/30">
                                    {section.kicker}
                                  </p>
                                )}
                                <h3 className="text-3xl font-display font-black flex items-center gap-4 mb-4">
                                  <span className="text-pastel-purple text-xl">0{idx + 1}</span>
                                  {section.title}
                                </h3>
                                <p className="text-lg text-black/60 leading-relaxed font-medium">
                                  {section.content}
                                </p>
                                {section.note && (
                                  <div className="mt-6 rounded-[1.5rem] border border-black/6 bg-[#faf9f5] px-5 py-4">
                                    <p className="text-sm leading-relaxed text-black/55 whitespace-pre-line">
                                      {section.note}
                                    </p>
                                  </div>
                                )}
                                {section.ctaLabel && section.ctaUrl && (
                                  <a
                                    href={section.ctaUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center rounded-full border border-black/12 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black/70 transition-all hover:-translate-y-0.5 hover:bg-pastel-green hover:text-black"
                                  >
                                    {section.ctaLabel}
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={idx} className="space-y-12">
                        <div className="max-w-2xl">
                          {section.kicker && (
                            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-black/30">
                              {section.kicker}
                            </p>
                          )}
                          <h3 className="text-3xl font-display font-black flex items-center gap-4 mb-4">
                            <span className="text-pastel-purple text-xl">0{idx + 1}</span>
                            {section.title}
                          </h3>
                          <p className="text-lg text-black/60 leading-relaxed font-medium">
                            {section.content}
                          </p>
                          {section.note && (
                            <div className="mt-6 rounded-[1.5rem] border border-black/6 bg-[#faf9f5] px-5 py-4">
                              <p className="text-sm leading-relaxed text-black/55 whitespace-pre-line">
                                {section.note}
                              </p>
                            </div>
                          )}
                          {section.ctaLabel && section.ctaUrl && (
                            <a
                              href={section.ctaUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-6 inline-flex items-center rounded-full border border-black/12 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black/70 transition-all hover:-translate-y-0.5 hover:bg-pastel-green hover:text-black"
                            >
                              {section.ctaLabel}
                            </a>
                          )}
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                          {section.media?.map((item, mIdx) => renderMediaCard(item, section.title, mIdx))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-40 py-20 border-t border-gray-100 text-center">
                  <p className="text-black/30 font-bold uppercase tracking-widest mb-8">End of Project</p>
                  <button 
                    onClick={onClose}
                    className="px-12 py-5 border-2 border-black text-black rounded-full font-black hover:bg-black hover:text-white transition-all uppercase tracking-tighter"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
