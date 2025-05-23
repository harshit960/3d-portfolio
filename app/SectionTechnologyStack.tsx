"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from "./home.module.css";

const technologyStack = [
    // Frontend Technologies
    {
        name: "Javascript",
        image: assets.home.technologyStack.javascript,
        officialSite: '#',
    },
    {
        name: "TypeScript",
        image: assets.home.technologyStack.typescript,
        officialSite: '#',
    },
    {
        name: "React JS",
        image: assets.home.technologyStack.reactJs,
        officialSite: '#',
    },
    {
        name: "Next.js",
        image: assets.home.technologyStack.nextJs,
        officialSite: '#',
    },
    {
        name: "Tailwind CSS",
        image: assets.home.technologyStack.tailwindCss,
        officialSite: '#',
    },
    {
        name: "Three JS",
        image: assets.home.technologyStack.threejs,
        officialSite: '#',
    },
    {
        name: "GSAP",
        image: assets.home.technologyStack.gsap,
        officialSite: '#',
    },
    
    // Backend Technologies
    {
        name: "Python",
        image: assets.home.technologyStack.python,
        officialSite: '#',
    },
    {
        name: "Node JS",
        image: assets.home.technologyStack.node,
        officialSite: '#',
    },
    {
        name: "Flask",
        image: assets.home.technologyStack.flask,
        officialSite: '#',
    },
    {
        name: "Prisma",
        image: assets.home.technologyStack.prisma,
        officialSite: '#',
    },
    
    // Databases
    {
        name: "MongoDB",
        image: assets.home.technologyStack.mongo,
        officialSite: '#',
    },
    // {
    //     name: "MySQL",
    //     image: assets.home.technologyStack.mysql,
    //     officialSite: '#',
    // },
    {
        name: "PostgreSQL",
        image: assets.home.technologyStack.psql,
        officialSite: '#',
    },
    // {
    //     name: "SQL Server",
    //     image: assets.home.technologyStack.mssql,
    //     officialSite: '#',
    // },
    
    // Cloud & DevOps
    {
        name: "Docker",
        image: assets.home.technologyStack.docker,
        officialSite: '#',
    },
    {
        name: "Azure",
        image: assets.home.technologyStack.azure,
        officialSite: '#',
    },
    {
        name: "AWS",
        image: assets.home.technologyStack.aws,
        officialSite: '#',
    },
    {
        name: "Google Cloud",
        image: assets.home.technologyStack.gcp,
        officialSite: '#',
    },
    {
        name: "GitHub Actions",
        image: assets.home.technologyStack.actions,
        officialSite: '#',
    },
    
    // Tools & Utilities
    {
        name: "Electron JS",
        image: assets.home.technologyStack.electron,
        officialSite: '#',
    },
    {
        name: "Selenium",
        image: assets.home.technologyStack.selenium,
        officialSite: '#',
    },
    {
        name: "LlamaIndex",
        image: assets.home.technologyStack.llama,
        officialSite: '#',
    },
]

export default function SectionTechnologyStack() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>Technology Stack</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className="text-white text-2xl">
                As I pursue my degree, I immerse myself in a world of coding, constantly exploring new technologies and frameworks. 
                </motion.p>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center'>
                    {technologyStack.map((item, index) => (
                        <div key={index.toString()} className='relative h-full '>
                            <motion.div
                                className="flex  justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    className='w-auto h-[100px] rounded-2xl  bg-white'
                                    src={item.image}
                                    width={0}
                                    height={100}
                                    alt={item.name}
                                />
                                <Link
                                    href="#"
                                    target="_blank"
                                    title={`Figure out about ${item.name}`}
                                >
                                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl">
                                        <p className='font-semibold text-center line-clamp-3'>
                                            {item.name}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
