import React from 'react';
import video1 from '/src/assets/video.mp4';
import video2 from '/src/assets/video2.mp4';
import video3 from '/src/assets/video3.mp4';

interface VideoItem {
    id: string;
    title: string;
    filePath: string;
}

const instagramIds = [
    "DOV8GiKk5MR",
    "DI1OHdPziKe",
    "DN26JsH5tZH",
    "DNp9DNMv9u1",
    "DSU2erYAKur",
    "DLzmiTTTXxM"
];

const EnhancedGallery = () => {

    const videoClips: VideoItem[] = [
        {
            id: 'vid1',
            title: 'Wedding Highlights',
            filePath: video1
        },
        {
            id: 'vid2',
            title: 'Reception Recap',
            filePath: video3
        },
        {
            id: 'vid3',
            title: 'Engagement Moments',
            filePath: video2
        }
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
                        Our <span className="text-gradient">Featured Work</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                        Checkout our latest work on Instagram.
                    </p>
                </div>

                {/* Instagram Embeds Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 place-items-center">
                    {instagramIds.map((id) => (
                        <div
                            key={id}
                            className="w-full relative aspect-[9/16] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-lg glow-hover transition-all duration-300 hover:scale-[1.01] group"
                        >
                            <iframe
                                src={`https://www.instagram.com/reel/${id}/embed`}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency
                                title={`Instagram Reel ${id}`}
                            />

                            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Cinematic Videos Section - Disabled
                <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white text-center">
                    Our <span className="text-gradient">Cinematic videos</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoClips.map((clip) => (
                        <div key={clip.id} className="relative overflow-hidden rounded-2xl bg-gray-800 border border-white/10 group">
                            <video
                                src={clip.filePath}
                                controls
                                className="w-full h-full object-cover aspect-video rounded-2xl"
                            />
                            <div className="p-4 bg-black text-white text-sm font-medium border-t border-white/10">{clip.title}</div>
                        </div>
                    ))}
                </div>
                */}
            </div>
        </section>
    );
};

export default EnhancedGallery;
