
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const EnhancedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Arun Kumar",
      event: "Wedding Highlights",
      rating: 5,
      text: "Excellent video editing skills with spot-on delivery timing. The service is truly top-notch! Skip Media Hub captured the essence of our wedding perfectly.",
    },
    {
      name: "Jessica Lee",
      event: "YouTube Content",
      rating: 5,
      text: "They just get it. My retention rates skyrocketed after I started using Skip Media Hub for my vlogs. The pacing is snappy and keeps people watching.",
    },
    {
      name: "Priya & Rahul",
      event: "Save the Date",
      rating: 5,
      text: "Great edits, timely delivery, and fantastic service. Highly recommended! The transitions and color grading were exactly what we imagined.",
    },
    {
      name: "NextGen Startups",
      event: "Brand Commercial",
      rating: 5,
      text: "We needed a high-energy promo for our product launch. The team delivered a video that looked like a million bucks. Super smooth workflow.",
    },
    {
      name: "Vikram Singh",
      event: "Corporate Reel",
      rating: 5,
      text: "They have an incredible ability to transform even basic footage into creative and engaging videos. I absolutely love their working style and the quality of service provided!",
    },
    {
      name: "Sarah Jenkins",
      event: "Travel Vlog",
      rating: 5,
      text: "Skip Media Hub turned my raw travel clips into a cinematic masterpiece. The sound design and pacing were incredible. Will definitely work with them again!",
    },
    {
      name: "Tech Solutions Inc.",
      event: "Product Promo",
      rating: 5,
      text: "Professional, fast, and creative. They understood our brand vision immediately and delivered a promo video that significantly boosted our engagement.",
    },
    {
      name: "Creative Minds Co.",
      event: "Social Media Reels",
      rating: 5,
      text: "The best decision for our agency. They churn out high-quality reels that follow the latest trends. Our client reach has doubled!",
    }
  ];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-thin mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Client <span className="text-gradient">Stories</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Hear from our clients who trusted us to capture their most precious moments
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="400">
          {/* Main testimonial display */}
          <div className="overflow-hidden rounded-3xl" ref={containerRef}>
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="min-w-full bg-gradient-to-br from-gray-900/50 to-black border-gray-800 glow-hover"
                >
                  <CardContent className="p-8 lg:p-16"> {/* Reduced padding for mobile */}
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Rating */}
                      <div className="flex justify-center mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-current mr-1 animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-2xl font-light text-white/90 mb-10 leading-relaxed ">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client info */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                            alt={testimonial.name}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mr-4 md:mr-6 ring-4 ring-primary/20"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        </div>
                        <div className="text-left">
                          <div className="text-lg md:text-2xl font-semibold text-white">{testimonial.name}</div>
                          <div className="text-primary text-sm md:text-lg font-medium">{testimonial.event}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-primary/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-primary/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
