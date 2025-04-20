import React from 'react';

const edidashobard = () => {
    return (
        <div className="bg-black text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Creating PartnerXchange: My Journey Building a Modern EDI Management Platform</h1>
            <p className="text-gray-300 mb-8">As someone who's worked extensively with EDI systems, I've always been frustrated by the fragmented tools available for managing trading partner integrations. Spreadsheets, emails, shared documents - none of these provided the comprehensive solution needed for modern EDI management. That's why I built <strong>PartnerXchange</strong> (PX_V2), a complete platform designed specifically to streamline EDI partner onboarding and project management.</p>

            <h2 className="text-2xl font-semibold mb-4">The Problem I Set Out to Solve</h2>
            <p className="mb-8">Managing EDI integrations often means dealing with multiple partners, different document types, and complex environments. The key challenges include:</p>
            <ul className="list-disc pl-8 mb-8">
                <li>Tracking trading partners across multiple projects</li>
                <li>Handling complex document specifications</li>
                <li>Ensuring collaboration between business and technical teams</li>
                <li>Maintaining consistency across development, QA, and production environments</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">PartnerXchange: A Comprehensive Solution</h2>
            <p className="mb-8">PartnerXchange consolidates all aspects of EDI management into a single platform. Here's what makes it stand out:</p>
            <ul className="list-disc pl-8 mb-8">
                <li><strong>Comprehensive EDI Management:</strong> Supports both X12 and EDIFACT standards with a wide range of document types like 204, 214, 301, and IFTMIN.</li>
                <li><strong>Streamlined Partner Onboarding:</strong> Facilitates carrier onboarding, SFTP configuration management, and partner setup with role-based access control.</li>
                <li><strong>Project Management:</strong> Provides real-time visibility into project progress, milestones, and document management.</li>
                <li><strong>Reporting and Communication:</strong> Offers CSV exports, PDF reports, and performance tracking through interactive dashboards.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">🚀 Tech Stack</h2>
            <p className="mb-2"><strong>Frontend:</strong> React 18, Vite, TailwindCSS, Material UI, Context API, React Router v6, dayjs, Yup, React Big Calendar, React CSV, HTML2Canvas, jsPDF</p>
            <p className="mb-2"><strong>Backend:</strong> Express.js, Microsoft SQL Server, JWT Authentication, Azure Blob Storage, Nodemailer, Express Validator</p>

            <h2 className="text-2xl font-semibold mb-4">🛠️ Development Journey</h2>
            <p className="mb-8">Building PartnerXchange had its challenges, especially in designing a flexible database schema that could support complex relationships between trading partners and messages. Additionally, implementing a robust role-based permission system was crucial to ensure security and accessibility.</p>

            <h2 className="text-2xl font-semibold mb-4">📂 Project Structure</h2>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
PX_V2/
├── frontend/
│   ├── public/
│   │   ├── Avatar/         # Profile pictures
│   │   └── uploads/        # Document storage
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Page components
│   │   └── App.jsx         # Main application component
│   └── .env                # Environment variables
└── backend/
    └── app.js             # Express server
            </pre>

            <h2 className="text-2xl font-semibold mb-4">🛡️ Deployment</h2>
            <p className="mb-4">Ensure you have Node.js = 18.0.0 and npm = 8.0.0 installed.</p>

            <h3 className="text-xl font-semibold mb-2">Frontend Setup</h3>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">npm install
npm run dev</pre>

            <h3 className="text-xl font-semibold mb-2">Backend Setup</h3>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">cd PX_V2/backend
npm install
node app.js</pre>

            <h2 className="text-2xl font-semibold mb-4">Results and Next Steps</h2>
            <p className="mb-8">PartnerXchange has already made a significant impact, reducing onboarding time, improving collaboration, and providing real-time visibility. Future plans include implementing AI-assisted mapping suggestions and deeper integrations with enterprise systems.</p>

            <h2 className="text-2xl font-semibold mb-4">📜 License</h2>
            <p>PartnerXchange is proprietary software. All rights reserved.</p>
        </div>
    );
};

export default edidashobard;