import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import timeGif from '/src/assets/time.gif';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden" ref={containerRef}>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* Full Width Cinematic Visual */}
        <motion.div
          style={{ opacity }}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-2xl border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
          <img
            src={timeGif}
            alt="Video Editing Process - Time Remix"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20 bg-black/70 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-mono tracking-widest uppercase">Rendering Future</span>
          </div>
        </motion.div>

        {/* Text Content - Centered */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
              We Don't Just Edit. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400">
                We Engineer Attention.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
              In a world of infinite scroll, your content needs to stop time.
              At <strong className="text-white">Skip Media Hub</strong>, we fuse technical precision with artistic chaos
              to craft videos that demand to be watched.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "High-Octane Edits", desc: "Fast-paced, rhythm-synced cuts that keep engagement at 100%." },
              { title: "Motion Graphics", desc: "Custom animations and kinetic typography that elevate your brand narrative." },
              { title: "VFX & Compositing", desc: "Seamless integration of visual effects to create impossible worlds." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA/Quote */}
          <motion.div
            style={{ y }}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center">
              <span className="text-6xl text-primary mb-6 opacity-50">"</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Turning raw footage into <br />cinematic masterpieces.
              </h3>
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                Let's Create Together
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
