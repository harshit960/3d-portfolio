'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Timeline() {
    const projects = [
        {
            name: "Grabn",
            date: "10/2022",
            type: "Hobby Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/grabn"
        },
        {
            name: "Culfest Website",
            date: "04/2023",
            type: "Collaborative Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/culfest"
        },
        {
            name: "Prompt App",
            date: "06/2023",
            type: "Freelance Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/prompt-app"
        },
        {
            name: "Ecell Website",
            date: "08/2023",
            type: "Collaborative Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/ecell"
        },
        {
            name: "Scraping Project",
            date: "08/2023",
            type: "Freelance Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/scraping"
        },
        {
            name: "GDSC Website",
            date: "10/2023",
            type: "Collaborative Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/gdsc"
        },
        {
            name: "Youtube Drive Bot",
            date: "10/2023",
            type: "Hobby Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/youtube-bot"
        },
        {
            name: "Hamburger Website",
            date: "12/2023",
            type: "Hobby Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/hamburger"
        },
        {
            name: "PX EDI Website",
            date: "02/2024",
            type: "Hobby Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/px-edi"
        },
        {
            name: "SEO Audit",
            date: "05/2024",
            type: "Collaborative Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/seo-audit"
        },
        {
            name: "RedBull Clone Contest",
            date: "06/2024",
            type: "Collaborative Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/redbull-clone"
        },
        {
            name: "Project BlackPerl Torrent wrapper",
            date: "06/2024",
            type: "Collaborative Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/blackperl"
        },
        {
            name: "YourAds Website",
            date: "07/2024",
            type: "Hobby Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/yourads"
        },
        {
            name: "Metafrazo Website",
            date: "10/2024",
            type: "Freelance Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/metafrazo"
        },
        {
            name: "NoCaptcha Project",
            date: "12/2024",
            type: "Hobby Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/nocaptcha"
        },
        {
            name: "Freelynce Project",
            date: "01/2025",
            type: "Freelance Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/freelynce"
        },
        {
            name: "Scraping Project",
            date: "01/2025",
            type: "Freelance Project",
            description: "Hobby Project",
            href: "https://github.com/yourusername/scraping-2"
        },
        {
            name: "Freelynce",
            date: "01/2025",
            type: "Freelance Project",
            description: "Freelynce is an AI-powered freelancing platform built with React, TypeScript, Node.js, Express, and PostgreSQL, offering features like AI-enhanced project posting, a learning hub, and AI-integrated chat, with a focus on empowering freelancers and connecting them with businesses.",
            href: "/projects/freelynce"
        },
        {
            name: "Nightcrawler",
            date: "03/2025",
            type: "Personal Project",
            description: "Nightcrawler is an asynchronous Python web crawler that uses Selenium and MongoDB to intelligently extract email addresses from websites within the same domain while bypassing anti-bot measures.",
            href: "/projects/nightcrawler"
        },
        {
            name: "BeatsNotFound",
            date: "04/2025",
            type: "Personal Project",
            description: "beatsnotfound is a terminal-style music application that uses AI to create personalized Spotify playlists based on your mood.",
            href: "/projects/beats404"
        },
        {
            name: "Anton",
            date: "04/2025",
            type: "Personal Project",
            description: "Anton is an advanced conversational AI platform with a microservice architecture, leveraging RAG, vector databases, and fine-tuned LLMs to provide context-aware conversations via Telegram with an evolving personality and Hinglish support.",
            href: "/projects/anton"
        },
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const initialDisplayCount = 4;

    const toggleExpand = () => {
        // console.log("Toggle expand clicked, current state:", isExpanded);
        window.location.href = '/projects';
        // setIsExpanded(prevState => !prevState);
    };
    
    // Create a new reversed copy of the projects array to avoid mutation
    const reversedProjects = [...projects].reverse();
    
    // Select the projects to display based on expanded state
    const displayedProjects = isExpanded 
        ? reversedProjects 
        : reversedProjects.slice(0, initialDisplayCount);

    return (
        <div className="w-full py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-['Poppins']">
                    Project Timeline
                </h2>
                <VerticalTimeline
                    lineColor="rgba(33, 150, 243, 0.2)"
                    className="custom-timeline"
                >
                    {displayedProjects.map((project, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'rgba(33, 150, 243, 0.1)',
                                color: '#fff',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '15px',
                                padding: '20px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                            contentArrowStyle={{ 
                                borderRight: '7px solid rgba(33, 150, 243, 0.1)',
                            }}
                            date={project.date}
                            dateClassName="text-white font-semibold font-['Inter']"
                            iconStyle={{ 
                                background: 'linear-gradient(135deg, #2196F3, #4CAF50)',
                                color: '#fff',
                                boxShadow: '0 0 0 4px rgba(33, 150, 243, 0.1)',
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a 
                                    href={project.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block hover:scale-105 transition-transform duration-200"
                                >
                                    <h3 className="text-xl font-bold mb-2 text-blue-400 font-['Poppins']">{project.name}</h3>
                                    <h4 className="text-sm font-semibold mb-3 text-purple-300 font-['Inter']">{project.type}</h4>
                                    <p className="text-gray-300 font-['Inter']">
                                        {project.description}
                                    </p>
                                </a>
                            </motion.div>
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        iconStyle={{ 
                            background: 'linear-gradient(135deg, #4CAF50, #2196F3)',
                            color: '#fff',
                            boxShadow: '0 0 0 4px rgba(76, 175, 80, 0.1)',
                        }}
                    />
                </VerticalTimeline>
                
                <div className="flex justify-center mt-8 ">
                    {projects.length > initialDisplayCount && (
                        <button
                            onClick={toggleExpand}
                            className="flex z-10 items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-['Poppins'] font-semibold hover:opacity-90 transition-opacity"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less <FaChevronUp className="text-sm" />
                                </>
                            ) : (
                                <>
                                    Show More <FaChevronDown className="text-sm" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default Timeline;

