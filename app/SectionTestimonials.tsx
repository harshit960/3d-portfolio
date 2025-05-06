"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from "./home.module.css";
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';

// Upwork logo component
const UpworkLogo = () => (
    <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden">
        <Image 
            src="/images/upwork-logo.png" 
            alt="Upwork Logo"
            width={80}
            height={80}
            className="object-cover"
            priority
        />
    </div>
);

const testimonials = [
  {
    id: 1,
    name: "Upwork Client",
    position: "Full-Stack Development Project",
    text: "Definitely a top-notch freelancer who is highly skilled in full-stack developer projects. I was able to complete my project hassle-free, and Harshit is very cooperative. I would definitely recommend him, and I've found a long-term developer for my future projects.",
    rating: 5
  },
  {
    id: 2,
    name: "Returning Client",
    position: "Repeat Development Project",
    text: "This is my second contract and I always recommend Harshit for any development projects. He delivered my project on time and the work is exceptional as always.",
    rating: 5
  },
  {
    id: 3,
    name: "Python Client",
    position: "Bug-Fix Project",
    text: "Harshit is not only excellent with JavaScripts/MERN but also very talented with python. He fixed my bug in the script within couple of hours. He is my go to developer.",
    rating: 5
  },
];

export default function SectionTestimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-slide functionality with increased interval for better reading experience
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Increased from 8000ms to 10000ms for better reading time
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Visual indicator of which testimonial is active
  const Indicator = ({ index }: { index: number }) => (
    <button 
      onClick={() => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
      }}
      className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
        index === activeIndex ? 'bg-gradient-to-r from-primary to-secondary scale-125' : 'bg-gray-400'
      }`}
      aria-label={`View testimonial ${index + 1}`}
    />
  );

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <FaStar key={index} className="text-yellow-400" />
      ));
  };

  // Animation variants with adjusted values
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800, // Reduced from 1000 for more consistent distance
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 800 : -800, // Reduced from 1000 for consistency
      opacity: 0,
    }),
  };

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label="Testimonials Section">
      <div className="text-center">
        <motion.h2 
          initial={{ y: 100, opacity: 0 }} 
          animate={inView ? { y: 0, opacity: 1 } : {}} 
          transition={{ duration: 0.5 }} 
          className={styles.sectionTitle}
        >
          Client Testimonials
        </motion.h2>
        <motion.p 
          initial={{ y: 100, opacity: 0 }} 
          animate={inView ? { y: 0, opacity: 1 } : {}} 
          transition={{ duration: 0.7 }} 
          className="text-white text-2xl"
        >
          What clients say about my work on <span className="text-[#6FDA44] font-semibold">Upwork</span>
        </motion.p>
      </div>

      <div className="mt-16 relative">
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }} 
          animate={inView ? { opacity: 1, scale: 1 } : {}} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -z-10 -top-20 -left-10 md:left-10 lg:left-20 w-[100px] h-[100px] text-primary/30"
        >
          <FaQuoteLeft className="w-full h-full" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0 }} 
          animate={inView ? { opacity: 1, scale: 1 } : {}} 
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute -z-10 -bottom-20 -right-10 md:right-10 lg:right-20 w-[100px] h-[100px] text-secondary/30 rotate-180"
        >
          <FaQuoteLeft className="w-full h-full" />
        </motion.div>

        {/* Improved testimonial slider with adjusted animation speed */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { 
                  type: "spring", 
                  stiffness: 180, // Reduced from 300 for smoother, more consistent motion
                  damping: 25,   // Adjusted from 30
                  duration: 0.6  // Added explicit duration for consistency
                },
                opacity: { duration: 0.3 } // Slightly increased from 0.2
              }}
              className="w-full px-4 md:px-20 lg:px-28"
            >
              <div className="bg-[#161b22] bg-opacity-80 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-[#30363d] shadow-xl flex flex-col items-center h-[420px] md:h-[400px] justify-between">
                <div className="relative mb-4 group">
                  <div className="absolute -inset-0.5 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <UpworkLogo />
                  </div>
                </div>
                
                <div className="text-center flex-1 flex flex-col justify-between">
                  <div className="testimonial-content flex-1 flex flex-col justify-center">
                    <p className="text-white text-lg md:text-xl italic mb-6 line-clamp-6">"{testimonials[activeIndex].text}"</p>
                  </div>
                  
                  <div className="testimonial-footer mt-auto">
                    <div className="flex justify-center mb-2">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                    
                    <h3 className="font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl md:text-2xl">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-[#8b949e]">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Indicators */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial} 
              className="bg-[#21262d] hover:bg-[#30363d] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 transition-colors"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <Indicator key={index} index={index} />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="bg-[#21262d] hover:bg-[#30363d] text-white rounded-full w-10 h-10 flex items-center justify-center ml-4 transition-colors"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
          
          <Link 
            href="https://www.upwork.com/freelancers/~01f7ba7d149ffc4eba"
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-8 text-[#6FDA44] hover:underline flex items-center gap-2 group"
          >
            View my Upwork profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}