import React from 'react';
import client1 from '/src/assets/clients/client1.png';
import client2 from '/src/assets/clients/client2.png';
import client3 from '/src/assets/clients/client3.png';
import client4 from '/src/assets/clients/client4.png';
import client5 from '/src/assets/clients/client5.png';
import client6 from '/src/assets/clients/client6.jpg';

const ClientLogos = () => {
    const clients = [
        { id: 1, logo: client1, name: 'Moon Gravity' },
        { id: 2, logo: client2, name: 'Vagal CPK' },
        { id: 3, logo: client3, name: 'G M' },
        { id: 4, logo: client4, name: 'Mr Vivasaya Tamilan' },
        { id: 5, logo: client5, name: 'Kangeyan Nature\'s Bounty' },
        { id: 6, logo: client6, name: 'Kural 360' },
    ];

    // Minimal client set to ensure smooth scrolling without gaps
    const marqueeClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>

            <div className="text-center mb-16 relative z-20">
                <h3 className="text-3xl md:text-4xl font-light text-white/90">
                    Valuable <span className="text-gradient font-normal">Clients</span>
                </h3>
            </div>

            <div className="flex w-full whitespace-nowrap overflow-hidden group">
                <div className="flex animate-marquee hover:[animation-play-state:paused] items-center">
                    {marqueeClients.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className="mx-8 md:mx-12 flex-shrink-0 opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex animate-marquee hover:[animation-play-state:paused] items-center" aria-hidden="true">
                    {marqueeClients.map((client, index) => (
                        <div
                            key={`clone-${client.id}-${index}`}
                            className="mx-8 md:mx-12 flex-shrink-0 opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
