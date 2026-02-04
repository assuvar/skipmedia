import React, { useRef, useState } from 'react';

// Video imports
import work1 from '../assets/videos/work1.mp4';
import work2 from '../assets/videos/work2.mp4';
import work3 from '../assets/videos/work3.mp4';
import work4 from '../assets/videos/work4.mp4';
import work5 from '../assets/videos/work5.mp4';
import work6 from '../assets/videos/work6.mp4';

interface VideoItem {
  id: string;
  title: string;
  filePath: string;
}

/* ---------------- Video Card Component ---------------- */
const VideoCard: React.FC<{ clip: VideoItem }> = ({ clip }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="w-full relative aspect-[9/16] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] group">

      {/* Video */}
      <video
        ref={videoRef}
        src={clip.filePath}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        onMouseEnter={() => {
          videoRef.current?.play();
        }}
        onMouseLeave={() => {
          if (!videoRef.current) return;
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
      />

      {/* Mute / Unmute Button */}
      <button
        className="absolute bottom-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted((prev) => !prev);
          videoRef.current?.play();
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Optional Title */}
      {clip.title && (
        <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm px-4 py-3">
          {clip.title}
        </div>
      )}
    </div>
  );
};

/* ---------------- Main Gallery ---------------- */
const EnhancedGallery: React.FC = () => {

  const videoClips: VideoItem[] = [
    { id: 'vid1', title: '', filePath: work1 },
    { id: 'vid2', title: '', filePath: work2 },
    { id: 'vid3', title: '', filePath: work3 },
    { id: 'vid4', title: '', filePath: work4 },
    { id: 'vid5', title: '', filePath: work5 },
    { id: 'vid6', title: '', filePath: work6 },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Our <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            A glimpse of our professional editing work.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {videoClips.map((clip) => (
            <VideoCard key={clip.id} clip={clip} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EnhancedGallery;
