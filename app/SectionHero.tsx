"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import { MotionProps, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface IAnimateImageProps extends MotionProps {
    className: string;
    src: string;
    width: number;
    height: number;
    alt: string;
}

const AnimatedImage = motion(Image);

export default function SectionHero(): JSX.Element {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    
    useEffect(() => {
      
    gsap.to( ".img-1", { rotate: 360 , repeat:-1, duration: 15, delay:3, ease:"none"})
    gsap.to( ".img-2", { rotate: -360 , repeat:-1, duration: 15, delay:3, ease:"none"})
    gsap.to( ".img-3", { rotate: -360 , repeat:-1, duration: 15, delay:3, ease:"none"})
    gsap.to( ".img-4", { rotate: 360 , repeat:-1, duration: 15, delay:3, ease:"none"})


    })
    


    const animatedImages: IAnimateImageProps[] = [
        {
            className: 'img-1 w-[140px] h-auto lg:w-[180px] lg:h-[120px] absolute top-3 -left-16 z-[1] 	',
            src: assets.home.hero.zigZag,
            width: 180,
            height: 120,
            alt: '',
            initial: { opacity: 0, x: -100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            // transition: { delay: 0.4, duration: 0.8 },
        },
        {
            className: 'img-2 w-[110px] h-auto lg:w-[150px] lg:h-[140px] absolute top-6 -right-12 z-[1]	',
            src: assets.home.hero.twistedTorus,
            width: 150,
            height: 140,
            alt: '',
            initial: { opacity: 0, x: 100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            // transition: { delay: 0.6, duration: 0.8 },
        },
        {
            className: 'img-3 w-[130px] h-auto lg:w-[170px] lg:h-[170px] absolute bottom-6 -left-14 z-[1]',
            src: assets.home.hero.quadrilateral,
            width: 170,
            height: 170,
            alt: '',
            initial: { opacity: 0, x: -100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            // transition: { delay: 0.8, duration: 0.8 },
        },
        {
            className: 'img-4 w-[192px] h-auto lg:w-[242px] lg:h-[202px] absolute bottom-8 -right-24 z-[1] ',
            src: assets.home.hero.triangle,
            width: 242,
            height: 202,
            alt: '',
            initial: { opacity: 0, x: 100 },
            animate: inView ? { opacity: 1, x: 0 } : {},
            // transition: { delay: 1, duration: 0.8 },
        },
    ];

    return (
        <section ref={ref} className='safe-x-padding mt-10 mb-[172px]' aria-label='Hero Section'>
            <div className='grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0'>
                {/* first */}
                <div className='flex flex-col items-center justify-center order-2 xl:items-start xl:order-1'>
                    <motion.p
                        className='font-montserrat font-bold text-2xl md:text-[28px] lg:text-[32px] text-white mb-3 text-center xl:text-left'
                        aria-label="Welcome to Deri's Portfolio"
                    >
                        Welcome to Harshit&apos;s Portfolio
                    </motion.p>
                    <motion.h2
                        className='font-montserrat font-extrabold text-5xl md:text-[64px] md:leading-[56px] lg:text-[66px] lg:leading-[88px] gradient-text mb-6 text-center xl:text-left'
                        aria-label="Full Stack Web Developer"
                    >
                        Full Stack Web Developer
                    </motion.h2>
                    <motion.p
                        className='text-base font-medium text-center md:text-xl lg:text-2xl text-white xl:text-left'
                        aria-label="I'm Deri Kurniawan. A passionate Full Stack Web Developer based in Sukabumi Regency, West Java, Indonesia."
                    >
                        I&apos;m Harshit Raj. A developer studying at NIT Jamshedpur.
                    </motion.p>
                    <motion.div 
                        className="mt-8 xl:mt-6 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <a 
                            href="https://drive.google.com/file/d/1BtnTux2T4OSGqGDTXhQ63zMQQ9gLUhqZ/view?usp=drivesdk" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex hover:bg-black  items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-lg hover:shadow-xl"
                            aria-label="View my resume"
                        >
                            <span>View Resume</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </motion.div>
                    
                    {/* </motion.p> */}
                </div>
                {/* second */}
                <div className='xl:order-2 '>
                    <div className='relative flex items-center justify-center order-1 xl:justify-end'>
                        <div className='avator relative bg-gray bg-opacity-5 backdrop-blur-sm backdrop-brightness-200 rounded-3xl  ' >
                            <motion.div
                                className=' relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] transition-all duration-1000  overflow-clip'
                            >
                                <AnimatedImage
                                    className='w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0'
                                    src={assets.home.hero.av1}
                                    width={480}
                                    height={480}
                                    alt=''
                                    priority
                                    initial={{ opacity: 0.5, y: 500 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2, duration: 0.2 }}
                                    aria-label="Harshit's Avatar"
                                />
                            </motion.div>
                            {animatedImages.map(({ className, src, width, height, alt, initial, animate, transition }, index) => (
                                <AnimatedImage
                                    key={index}
                                    className={className}
                                    src={src}
                                    width={width}
                                    height={height}
                                    alt={alt}
                                    initial={initial}
                                    animate={animate}
                                    transition={transition}
                                    aria-hidden={!inView}

                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
