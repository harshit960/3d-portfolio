---
title: Anton
date: '2023-05-15'
description: Learn how to set up a new project with Next.js and TypeScript for building modern web applications.
author: Harshit Raj
tags: ['Next.js', 'TypeScript', 'Web Development', 'React']
image: https://images.unsplash.com/photo-1743993330456-6fa7a903b3bd
---

# Freelynce (YoungLancer)

![Logo](LandingPage/public/logo.png)

**Freelancing Reborn with AI Precision**

Freelynce is an innovative, AI-powered freelancing platform that connects businesses with skilled freelancers while leveraging cutting-edge AI technology to enhance the experience for all users. The platform empowers freelancers of all ages to earn, learn, and thrive in a competitive global market while providing businesses with access to top-tier talent.

## 🌟 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Architecture](#project-architecture)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Overview

Freelynce (also known as YoungLancer) is redefining freelancing by bridging talent with opportunity, delivering cutting-edge AI tools, and fostering a vibrant community of creators and businesses. Our mission is to empower freelancers by unlocking transformative economic opportunities, enabling them to earn, learn, and thrive with cutting-edge AI tools in a competitive global market.

### Who We Serve

- **Freelancers:** Professionals looking to showcase their skills and find quality projects
- **Clients:** Businesses seeking talented freelancers for various projects
- **Students:** Young professionals entering the workforce and building their portfolios

## 🌟 Key Features

### For Freelancers
- **Quick Verification:** Fast and secure identity verification process
- **Professional Showcase:** Portfolio building tools to highlight unique skills
- **Learning Hub:** Access to cutting-edge AI development courses
- **AI Studio:** Leverage AI tools to enhance productivity and capabilities
- **Project Marketplace:** Explore diverse projects across traditional and AI domains
- **Low Fees:** Flat 6% project fee with zero hidden charges

### For Clients
- **Client Onboarding:** Fast account creation with secure access
- **Smart Project Posting:** AI-assisted project description creation
- **Flexible Engagement:** Choose between AI-driven solutions or human freelancers
- **Talent Discovery:** Browse top-tier professionals through comprehensive profiles
- **Secure Transactions:** Escrow-protected payment system
- **Affordable Services:** 2% payment gateway fee with escrow protection

### For Businesses
- **Elite Talent Network:** Connect with pre-screened pool of innovative talents
- **Intelligent Job Posting:** Create targeted job descriptions with AI assistance
- **Strategic Recruitment:** Identify top talent through detailed performance insights
- **Economical Hiring:** Minimize recruitment costs with flat 5% commission fee
- **Quality Assurance:** Transparent rating ecosystem ensures high standards

### Platform Innovations
- **AI Chat Interface:** Built-in chat functionality powered by Google's Gemini AI
- **Dual Work Models:** Choose between AI-assisted self-service or traditional freelance model
- **Social Authentication:** Multiple login options including Google and GitHub
- **Email Verification:** Secure account verification process
- **Role-Based Access:** Specialized experiences for different user types

## 🏗️ Project Architecture

The project is structured into two main components:

### Backend
- Node.js Express server handling authentication, user management, and chat functionality
- PostgreSQL database with Prisma ORM for data management
- WebSocket implementation for real-time chat features
- Email verification and 2FA authentication

### Frontend (LandingPage)
- React-based single-page application
- TypeScript for enhanced type safety
- Tailwind CSS for responsive UI design
- Framer Motion for smooth animations and transitions
- React Router for navigation

## 🛠️ Tech Stack

### Frontend
- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Authentication:** Google OAuth, GitHub OAuth
- **HTTP Client:** Fetch API
- **Build Tool:** Vite

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (hosted on Neon Tech)
- **ORM:** Prisma
- **Authentication:** JWT, bcrypt
- **Email:** Nodemailer with Gmail SMTP
- **AI Integration:** Google Generative AI (Gemini)
- **WebSockets:** ws library

### DevOps & Infrastructure
- **Database Hosting:** Neon Tech (PostgreSQL)
- **Frontend Hosting:** Netlify
- **Version Control:** Git

## 🔧 Setup and Installation

### Prerequisites
- Node.js (v16+)
- NPM or Yarn
- PostgreSQL database

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/freelynce.git
   cd freelynce/Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see Environment Variables section)

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the LandingPage directory:
   ```bash
   cd ../LandingPage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (create .env file based on .env.example)

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔐 Environment Variables

### Backend
```
DATABASE_URL="postgresql://db_owner:password@host/db?sslmode=require"
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
GMAIL_ID=your_gmail_address
GMAIL_PASS=your_gmail_app_password
BASE_URL="http://localhost:5173"
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

### Frontend
```
VITE_API_URL=your_backend_api_url
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_client_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📚 API Documentation

### Authentication Routes
- `POST /signup/freelancer` - Register a new freelancer
- `POST /signup/client` - Register a new client
- `POST /signup/business` - Register a new business
- `POST /signup/verify` - Verify email address
- `POST /signup/social/google` - Google social authentication
- `POST /signup/social/freelancer/submit` - Complete freelancer registration after social auth
- `POST /signup/social/client/submit` - Complete client registration after social auth

### Login Routes
- `POST /login/freelancer` - Login for freelancers
- `POST /login/client` - Login for clients
- `POST /login/business` - Login for businesses
- `POST /login/verify` - Verify email during login
- `POST /login/verify_otp` - Verify OTP for two-factor authentication
- `POST /login/social/google` - Google social login

### Chat Routes
- `WebSocket Connection` - Real-time chat functionality using Gemini AI

## 🗺️ Future Roadmap

- [ ] Enhance AI Studio with more specialized tools
- [ ] Expand Learning Hub with AI tutorials and certification programs
- [ ] Implement advanced project matching algorithms
- [ ] Add multi-language support for global reach
- [ ] Develop mobile applications for iOS and Android
- [ ] Integrate more payment gateways and cryptocurrency options
- [ ] Implement AI-powered dispute resolution system

## 🤝 Contributing

We welcome contributions to the Freelynce project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Freelynce: Freelancing Reborn with AI Precision**  
Join us in shaping the future of work—one project, one skill, one freelancer at a time.