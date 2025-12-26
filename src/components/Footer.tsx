import React from 'react';
import { Camera, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '/src/assets/SKIP logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Skip Media Hub"
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Skip Media Hub</h3>
                <p className="text-white/70">Unify Brand to Dream Audience</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Creating timeless memories through the art of videography. Based in Vellore and Bangalore,
              we specialize in capturing life's most precious moments with unparalleled elegance and style.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/skip_media_hub?igsh=aXcxZTAzZGd5dTFz" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://youtube.com/@skipmediahub?si=YUyWDUuU6Tgd6qS0" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Video Editing Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Reels / Shorts</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Motion Graphics</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Full Video Production</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Content Writing</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Brand Strategy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div className="text-white/70">
                  <p>1442/Vandavasi road</p>
                  <p>Anna Nager, Sivagangai</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="https://wa.me/6382958407" className="text-white/70 hover:text-primary transition-colors duration-300">
                  +91 6382958407
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:skipmediahub@gmail.com" className="text-white/70 hover:text-primary transition-colors duration-300">
                  skipmediahub@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm text-center md:text-left">
            <p>© {currentYear} Skip Media Hub. All rights reserved.</p>
            <p className="mt-5 h-2">
              Website crafted by{' '}
              <a
                href="https://assuvar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Assuvar
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
