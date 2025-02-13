"use client";

import { useEffect, useState } from 'react';
import { assets } from '@/constant/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import { FiFigma, FiGithub } from 'react-icons/fi';
import styles from "./home.module.css";

const tabs = [
    {
        name: 'Dev',
        image: assets.home.myLatestProject.vs,
        data: [
            {
                slug: 'Younglancer',
                title: 'Younglancer Website',
                image: assets.home.myLatestProject.projects.Younglancer,
                repositoryUrl: "#",
                demoUrl: "https://younglancer.netlify.app/",
            },
            {
                slug: 'MetaFrazo',
                title: 'MetaFrazo Landing Page',
                image: assets.home.myLatestProject.projects.metafrazo,
                repositoryUrl: "https://github.com/harshit960/metafrazo",
                demoUrl: "https://metafrazo.vercel.app/",
            },
            {
                slug: 'Seovew',
                title: 'Seovew Website',
                image: assets.home.myLatestProject.projects.seo,
                repositoryUrl: "https://github.com/harshit960/SEO-Audit",
                demoUrl: "https://www.seovew.com/",
            },
            {
                slug: 'RedBull',
                title: 'RedBull Website Redesign',
                image: assets.home.myLatestProject.projects.redbull,
                repositoryUrl: "https://github.com/harshit960/Project-Redbull_Harshit",
                demoUrl: "https://project-redbull.vercel.app/",
            },
            {
                slug: 'YourAds',
                title: 'YourAds Landing Page',
                image: assets.home.myLatestProject.projects.yourads,
                repositoryUrl: "https://github.com/harshit960/YourAdsNext",
                demoUrl: "https://www.yourads.in/",
            },
            {
                slug: 'GDSC',
                title: 'GDSC Landing Page',
                image: assets.home.myLatestProject.projects.gdscWeb,
                repositoryUrl: "https://github.com/harshit960/GDSCnitjsr_officalweb",
                demoUrl: "https://www.gdscnitjsr.in/",
            },
            {
                slug: 'Culfest 23 Website',
                title: 'Culfest 23 Website',
                image: assets.home.myLatestProject.projects.culfest,
                repositoryUrl: "https://github.com/harshit960",
                demoUrl: "https://culfest.in/",
            },
            {
                slug: 'ECell',
                title: 'ECell Website',
                image: assets.home.myLatestProject.projects.ecell,
                repositoryUrl: "https://github.com/codewithnick/ecellnitjsr",
                demoUrl: "https://ecellnitjsr.vercel.app",
            },
            {
                slug: 'GrabN',
                title: 'GrabN',
                image: assets.home.myLatestProject.projects.grabn,
                repositoryUrl: "https://github.com/harshit960/GrabN",
                demoUrl: "#",
            },
            {
                slug: 'Hamburger',
                title: 'Hamburger',
                image: assets.home.myLatestProject.projects.ham,
                repositoryUrl: "https://github.com/harshit960/Hamburger",
                demoUrl: "https://hamburger-kohl.vercel.app/",
            },
            
            {
                slug: 'SCRAP',
                title: 'Selenium Freelance Project',
                image: assets.home.myLatestProject.projects.sel,
                repositoryUrl: "https://github.com/harshit960",
                demoUrl: "#",
            },
            
            
        ]
    },
    {
        name: 'Editing',
        image: assets.home.myLatestProject.pp,
        data: [
            {
                slug: '',
                title: 'Culfest Aftermovie',
                image: assets.home.myLatestProject.projects.culfestaf,
                repositoryUrl: "#",
                demoUrl: "#",
            },
            {
                slug: '',
                title: 'GDSC Trailer',
                image: assets.home.myLatestProject.projects.gdsc,
                repositoryUrl: "#",
                demoUrl: "#",
            },
            {
                slug: '',
                title: 'Culfest Countdown',
                image: assets.home.myLatestProject.projects.culfestcount,
                repositoryUrl: "#",
                demoUrl: "#",
            },
        ],
    },
];

tabs.push({
    name: 'More',
    image: assets.home.myLatestProject.rocket,
    data: []
});

export default function SectionMyLatestProject() {
    const [activeTab, setActiveTab] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab && parseInt(tab) < tabs.length - 1) {
            setActiveTab(parseInt(tab));
        }
    }, [activeTab])

    return (
        <section ref={ref} className={`safe-x-padding  ${styles.sectionDistance}`} aria-label='My Latest Project Section'>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>My Latest Project</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className="text-white text-2xl">Take a look at something I&apos;ve worked on, such as a case study, real project, and more</motion.p>
            </div>
            <div className='mt-[50px] h-full'>
                <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                    <div className='flex flex-row md:flex-col backdrop-blur-sm bg-white bg-opacity-5 backdrop-brightness-110	 p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]'>
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={index.toString()}
                                className={`relative ${activeTab === index ? 'gradient-bg' : 'bg-white'} w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden backdrop-brightness-200 backdrop-blur-sm bg-white bg-opacity-5`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                onClick={() => {
                                    if (index === tabs.length - 1) {
                                        router.push('/project');
                                        return;
                                    }
                                    setActiveTab(index);
                                    window.history.pushState({}, '', `?tab=${index}`);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={tab.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    style={{ height: 'auto' }}
                                    className='rounded-xl'
                                />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                                    <p className={`${activeTab === index ? 'text-white' : 'text-white'} font-bold transition-colors duration-75 ease-in-out`}>{tab.name}</p>
                                </div>
                            </motion.button>

                        ))}
                    </div>
                    <div className='overflow-hidden projects'>
                        <div className='bg-gray bg-opacity-5 backdrop-brightness-200 rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto backdrop-blur-sm'>
                            <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                                {tabs.map((tab, tabIndex) =>
                                    tab.data.map((item, dataIndex) =>
                                        activeTab === tabIndex && (
                                            <motion.div
                                                key={dataIndex.toString()}
                                                className="relative col-span-12 overflow-hidden group xl:col-span-6"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="col-span-6">
                                                    <motion.div
                                                        className="bg-white rounded-2xl md:rounded-[25px] lg:h-[250px] h-[180px] overflow-hidden p-0"
                                                        initial={{ opacity: 0, x: -50 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                                    >
                                                        <Image
                                                            className="object-cover"
                                                            src={item.image}
                                                            alt=""
                                                            width={441}
                                                            height={261}
                                                            priority
                                                        />
                                                    </motion.div>
                                                </div>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl'>
                                                    <div className='flex flex-col items-center justify-center w-full h-full select-none lg:select-auto'>
                                                        <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.title}</p>
                                                        <div className='flex flex-row gap-4 text-3xl'>
                                                            {item.repositoryUrl && (
                                                                <Link
                                                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                                    href={{
                                                                        pathname: item.repositoryUrl,
                                                                        query: {
                                                                            utm_source: 'deri.my.id',
                                                                            utm_medium: 'campaign',
                                                                            utm_campaign: 'portfolio'
                                                                        }
                                                                    }}
                                                                    target='_blank'
                                                                    title="Repository"
                                                                >
                                                                    {tabs[activeTab].name.toLowerCase() === "project" ? (
                                                                        <BsGithub />
                                                                    ) : (
                                                                        <FiGithub />
                                                                    )}
                                                                </Link>
                                                            )}
                                                            {item.demoUrl && (
                                                                <Link
                                                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                                    href={{
                                                                        pathname: item.demoUrl,
                                                                        query: {
                                                                            utm_source: 'deri.my.id',
                                                                            utm_medium: 'campaign',
                                                                            utm_campaign: 'portfolio'
                                                                        }
                                                                    }}
                                                                    target='_blank'
                                                                    title="Demo"
                                                                >
                                                                    <IoMdOpen />
                                                                </Link>
                                                            )}
                                                            {/* <Link className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary" href={`/project/${item.slug}`} title={`Detail of ${item.title}`}>
                                                                <BsInfoCircle />
                                                            </Link> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
