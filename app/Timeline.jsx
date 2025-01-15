'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React, { useState } from 'react'

function Timeline() {
    const projects = [
        {
            name: "Grabn",
            date: "10/2022",
            type: "Hobby Project",
            description: "Hobby Project"
        },
        {
            name: "Culfest Website",
            date: "04/2023",
            type: "Collaborative Project",
            description: "Hobby Project"
        },
        {
            name: "Prompt App",
            date: "06/2023",
            type: "Freelance Project",
            description: "Hobby Project"
        },
        {
            name: "Ecell Website",
            date: "08/2023",
            type: "Collaborative Project",
            description: "Hobby Project"
        },
        {
            name: "Scraping Project",
            date: "08/2023",
            type: "Freelance Project",
            description: "Hobby Project"
        },
        {
            name: "GDSC Website",
            date: "10/2023",
            type: "Collaborative Project",
            description: "Hobby Project"
        },
        {
            name: "Youtube Drive Bot",
            date: "10/2023",
            type: "Hobby Project",
            description: "Hobby Project"
        },
        {
            name: "Hamburger Website",
            date: "12/2023",
            type: "Hobby Project",
            description: "Hobby Project"
        },
        {
            name: "PX EDI Website",
            date: "02/2024",
            type: "Hobby Project",
            description: "Hobby Project"
        },
        {
            name: "SEO Audit",
            date: "05/2024",
            type: "Collaborative Project",
            description: "Hobby Project"
        },
        {
            name: "RedBull Clone Contest",
            date: "06/2024",
            type: "Collaborative Project",
            description: "Hobby Project"
        },
        {
            name: "Project BlackPerl Torrent wrapper",
            date: "06/2024",
            type: "Collaborative Project",
            description: "Hobby Project"
        },
        {
            name: "YourAds Website",
            date: "07/2024",
            type: "Hobby Project",
            description: "Hobby Project"
        },
        {
            name: "Metafrazo Website",
            date: "10/2024",
            type: "Freelance Project",
            description: "Hobby Project"
        },
        {
            name: "NoCaptcha Project",
            date: "12/2024",
            type: "Hobby Project",
            description: "Hobby Project"
        },
        {
            name: "Freelynce Project",
            date: "01/2025",
            type: "Freelance Project",
            description: "Hobby Project"
        },
        {
            name: "Scraping Project",
            date: "01/2025",
            type: "Freelance Project",
            description: "Hobby Project"
        },
        {
            name: "PX Productiont",
            date: "01/2025",
            type: "Freelance Project",
            description: "Hobby Project"
        },

    ]
    // State to manage the number of events displayed
    const [visibleCount, setVisibleCount] = useState(3);

    // Function to handle "Load More" button click
    const loadMoreEvents = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 3, allEvents.length));
    };
    return (
        <>
            <VerticalTimeline
            >
                {projects.reverse().map((project, index) => (
                    <>

                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'rgba(33, 150, 243, 0.2)', // Semi-transparent background
                                color: '#fff', // White text color
                                backdropFilter: 'blur(100px)', // Blurring the background
                                borderRadius: '10px', // Optional: rounded corners for a soft look
                                padding: '20px', // Optional: padding for content
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: subtle shadow for depth
                            }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date={project.date}
                            iconStyle={{ background: '#fff', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{project.name}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{project.type}</h4>
                            <p>
                                {project.description}
                            </p>
                        </VerticalTimelineElement>
                    </>

                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
                />
                {/* {visibleCount < projects.length && (
                    <div style={{ textAlign: 'center', margin: '20px' }}>
                        <button onClick={loadMoreEvents}>Load More</button>
                    </div>
                )} */}
            </VerticalTimeline>

        </>)
}
export default Timeline

