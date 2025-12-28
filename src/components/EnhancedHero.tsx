import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Scissors, MousePointer2, Type, Music, Play, SkipForward, SkipBack, Settings, Search, Monitor, Volume2, Layers } from 'lucide-react';
import bgm from '/src/assets/bgm.mp3';


const EnhancedHero = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(bgm);
    audioRef.current.load();
  }, []);

  const playSoundAndOpenWhatsApp = () => {
    // Audio removed as per request
    // if (audioRef.current) {
    //   audioRef.current.currentTime = 0;
    //   audioRef.current.play().catch((err) => {
    //     console.warn('Audio failed to play:', err);
    //   });
    // }

    const message = encodeURIComponent(
      "Hi Skip Media Hub, I'm interested in working with you."
    );
    window.open(`https://wa.me/6382958407?text=${message}`, '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const trackVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black font-inter selection:bg-primary/30">

      {/* --- Advanced Timeline Interface Background --- */}
      <div className="absolute inset-0 z-0 opacity-80 select-none overflow-hidden bg-[#0a0a0a]">

        {/* Top Bar / Toolbar */}
        <div className="absolute top-24 left-0 right-0 h-16 bg-[#1a1a1a] border-b border-white/10 flex items-center px-6 justify-between z-10">
          <div className="flex items-center space-x-2 text-white/50 text-xs font-mono">
            <span className="text-primary">00:00:12:04</span>
            <span className="w-px h-4 bg-white/10 mx-2"></span>
            <span>REC 1920x1080 60fps</span>
          </div>
          <div className="flex items-center space-x-6">
            <MousePointer2 className="w-4 h-4 text-primary" />
            <Scissors className="w-4 h-4 text-white/40" />
            <Type className="w-4 h-4 text-white/40" />
            <Music className="w-4 h-4 text-white/40" />
            <Search className="w-4 h-4 text-white/40" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-white/40 text-xs uppercase tracking-widest">Live Preview</span>
            </div>
          </div>
        </div>

        {/* Timeline Tracks Container */}
        <div className="absolute top-40 bottom-0 left-0 right-0 flex flex-col">

          {/* Time Ruler */}
          <div className="h-8 bg-[#151515] border-b border-white/5 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-end"
              variants={trackVariants}
              animate="animate"
            >
              {[...Array(100)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-[100px] h-full border-r border-white/10 relative">
                  <span className="absolute top-1 left-1 text-[9px] text-white/30">{`00:00:${i < 10 ? '0' + i : i}:00`}</span>
                  <div className="absolute bottom-0 right-0 h-2 w-px bg-white/20"></div>
                  <div className="absolute bottom-0 right-[25px] h-1 w-px bg-white/10"></div>
                  <div className="absolute bottom-0 right-[50px] h-1 w-px bg-white/10"></div>
                  <div className="absolute bottom-0 right-[75px] h-1 w-px bg-white/10"></div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tracks Area */}
          <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]">

            {/* Playhead (Static Center) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary z-20 pointer-events-none">
              <div className="absolute top-0 transform -translate-x-1/2 -mt-1">
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0H10.5V8L5.5 12L0.5 8V0Z" fill="#2563EB" />
                </svg>
              </div>
            </div>

            <motion.div
              className="w-[200%] h-full flex flex-col pt-4"
              variants={trackVariants}
              animate="animate"
            >
              {/* Video Track V1 */}
              <div className="h-16 border-b border-white/5 relative mb-2 group">
                <div className="absolute top-2 left-4 px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/40 font-mono border border-white/5">V1</div>
                <div className="ml-20 h-full flex items-center space-x-1">
                  {[...Array(15)].map((_, i) => (
                    <div key={`v1-${i}`} className="h-12 rounded bg-cyan-500/20 border border-cyan-500/40 relative overflow-hidden group-hover:bg-cyan-500/30 transition-colors" style={{ width: `${Math.random() * 300 + 100}px` }}>
                      <div className="absolute top-0 left-0 right-0 h-4 bg-cyan-500/20 text-[9px] text-cyan-200 px-2 flex items-center truncate">IMG_2025_{i}.mp4</div>
                      <Layers className="absolute bottom-1 right-2 w-3 h-3 text-cyan-500/40" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Track V2 */}
              <div className="h-16 border-b border-white/5 relative mb-2 group">
                <div className="absolute top-2 left-4 px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/40 font-mono border border-white/5">V2</div>
                <div className="ml-40 h-full flex items-center space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={`v2-${i}`} className="h-12 rounded bg-fuchsia-500/20 border border-fuchsia-500/40 relative overflow-hidden group-hover:bg-fuchsia-500/30 transition-colors" style={{ width: `${Math.random() * 200 + 150}px`, marginLeft: `${Math.random() * 100}px` }}>
                      <div className="absolute top-0 left-0 right-0 h-4 bg-fuchsia-500/20 text-[9px] text-fuchsia-200 px-2 flex items-center truncate">Overlay_Effect_{i}.mov</div>
                      <Monitor className="absolute bottom-1 right-2 w-3 h-3 text-fuchsia-500/40" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Audio Track A1 */}
              <div className="h-12 border-b border-white/5 relative mb-1 mt-4 group">
                <div className="absolute top-2 left-4 px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/40 font-mono border border-white/5">A1</div>
                <div className="ml-20 h-full flex items-center space-x-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={`a1-${i}`} className="h-8 rounded bg-green-500/20 border border-green-500/40 relative overflow-hidden group-hover:bg-green-500/30 transition-colors" style={{ width: `${Math.random() * 300 + 100}px` }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <svg width="100%" height="20" preserveAspectRatio="none">
                          <path d={`M0 10 ${[...Array(20)].map((_, j) => `L${j * 5}% ${10 + (Math.random() - 0.5) * 15}`).join(' ')} L100% 10`} stroke="#22c55e" strokeWidth="1" fill="none" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audio Track A2 */}
              <div className="h-12 border-b border-white/5 relative mb-1 group">
                <div className="absolute top-2 left-4 px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/40 font-mono border border-white/5">A2</div>
                <div className="ml-20 h-full flex items-center space-x-1">
                  {[...Array(18)].map((_, i) => (
                    <div key={`a2-${i}`} className="h-8 rounded bg-teal-500/20 border border-teal-500/40 relative overflow-hidden group-hover:bg-teal-500/30 transition-colors" style={{ width: `${Math.random() * 250 + 80}px`, marginLeft: `${Math.random() * 50}px` }}>
                      <Volume2 className="absolute top-1/2 left-2 transform -translate-y-1/2 w-3 h-3 text-teal-500/40" />
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* --- Main Hero Content --- */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl px-4 mt-20 md:mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Small Label */}
        <div className="mb-6">
          <span className="text-white/80 text-xs md:text-sm tracking-[0.4em] uppercase bg-black/60 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg">Creative Agency</span>
        </div>

        {/* Main Title - Skip Media */}

        <h1 className="text-5xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter mb-10 drop-shadow-2xl text-center leading-none">
          <span className="glow-text-blue inline-block hover:scale-105 transition-transform duration-300 cursor-default">S</span>
          <span className="text-white inline-block">kip </span>
          <span className="glow-text-blue inline-block ml-2 md:ml-4 hover:scale-105 transition-transform duration-300 cursor-default">M</span>
          <span className="text-white inline-block">edia </span>
          <span className="glow-text-blue inline-block ml-2 md:ml-4 hover:scale-105 transition-transform duration-300 cursor-default">H</span>
          <span className="text-white inline-block">ub</span>
        </h1>

        {/* Services Pill Bar */}
        <div className="service-pill px-8 md:px-12 py-5 rounded-full flex flex-wrap items-center justify-center gap-6 md:gap-10 border border-white/20 bg-black shadow-2xl transition-all duration-300 hover:border-primary/50 hover:scale-105">
          <span className="service-pill-item text-xs md:text-base font-medium tracking-wide text-white">Reels / Shorts</span>
          <span className="hidden md:block w-px h-5 bg-white/20"></span>
          <span className="service-pill-item text-xs md:text-base font-medium tracking-wide text-white">Motion</span>
          <span className="hidden md:block w-px h-5 bg-white/20"></span>
          <span className="service-pill-item text-xs md:text-base font-medium tracking-wide text-white">Full Videos</span>
          <span className="hidden md:block w-px h-5 bg-white/20"></span>
          <span className="service-pill-item text-xs md:text-base font-medium tracking-wide text-white">Content Writing</span>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-6">
          <Button
            variant="ghost"
            onClick={playSoundAndOpenWhatsApp}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:bg-white/5 border border-white/10 hover:border-white/30"
          >
            <span className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] uppercase flex items-center">
              Start a Project <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          </Button>

          <Button
            variant="ghost"
            onClick={() => window.open('mailto:skipmediahub@gmail.com', '_blank')}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:bg-white/5 border border-white/10 hover:border-white/30"
          >
            <span className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] uppercase flex items-center">
              Let's Create Together <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          </Button>
        </div>

      </motion.div>
    </section >
  );
};

export default EnhancedHero;
