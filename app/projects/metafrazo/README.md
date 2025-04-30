---
title: MetaFrazo Landing Page
date: '2024-08'
description: MetaFrazo Landing Page is a modern, responsive website built with React, Vite, and TailwindCSS, showcasing an AI dubbing and translation solution for media content with smooth animations and a focus on user experience.
author: Harshit Raj
tags: [Landing Page, React, TailwindCSS, Responsive, Framer Motion]
image: https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmetafrazo.b24e26ac.png&w=1080&q=75
---

# MetaFrazo Landing Page

A modern, responsive landing page for MetaFrazo - an AI Dubbing and Translation solution for Media content.

## 📋 Overview

This repository contains the source code for the MetaFrazo landing page, built using modern web technologies. The landing page showcases MetaFrazo's AI-powered dubbing and translation services that help globalize media content while preserving original voices with accurate lip-sync and on-screen text translation capabilities.

## 🚀 Tech Stack

### Core Technologies
- **React (^18.3.1)**: Frontend library for building the user interface
- **Vite (^5.4.1)**: Next-generation frontend tooling for faster development and optimized builds
- **TailwindCSS (^3.4.10)**: Utility-first CSS framework for rapid UI development

### Animation & User Experience
- **Framer Motion (^11.5.2)**: Animation library for React that makes creating animations easy
- **GSAP (^3.12.5)**: Professional-grade animation library for complex animations
- **Locomotive Scroll (^5.0.0-beta.21)**: Smooth scrolling library for enhanced user experience

### Form Handling
- **EmailJS (^4.0.3/@4.4.1)**: Client-side email sending without a backend
- **React Select (^5.8.0)**: Flexible and customizable select input control

### Development Tools
- **ESLint (^9.9.0)**: Code linting and formatting
- **PostCSS (^8.4.41)**: Tool for transforming CSS with JavaScript
- **Autoprefixer (^10.4.20)**: Automatically adds vendor prefixes to CSS
- **SASS Embedded (^1.78.0)**: CSS preprocessor for advanced styling capabilities

## 📦 Project Structure

```
frontend/
├── public/               # Static assets served as-is
│   ├── assets/           # Images and media files
│   ├── fonts/            # Custom font files
│   └── reviews/          # Customer review images
├── src/
│   ├── components/       # Reusable UI components
│   ├── sections/         # Page sections (modular blocks)
│   │   ├── Hero.jsx      # Hero section with main value proposition
│   │   ├── Benefits.jsx  # Product benefits section
│   │   ├── Features.jsx  # Product features overview
│   │   ├── Reviews.jsx   # Customer reviews and testimonials
│   │   ├── FAQ.jsx       # Frequently asked questions
│   │   └── ...           # Other page sections
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # TailwindCSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with attention to user experience
- **Responsive Layout**: Fully responsive design for all device sizes
- **Custom Animations**: Smooth animations and transitions using Framer Motion and GSAP
- **Smooth Scrolling**: Enhanced scrolling experience with Locomotive Scroll
- **Custom Typography**: Uses Satoshi font family for a modern look and feel

## 📱 Landing Page Sections

1. **Hero Section**: Main value proposition with CTA and company logos
2. **ShowReel**: Visual demonstration of the product in action
3. **Testimonials**: Customer success stories and feedback
4. **Features**: Detailed product features and capabilities
5. **Benefits**: Key benefits of using MetaFrazo
6. **Reviews**: Customer reviews with images
7. **FAQ**: Frequently asked questions and answers
8. **Email/Contact**: Contact form for inquiries (using EmailJS)
9. **CTA Section**: Call-to-action for conversion
10. **Enterprise Section**: Specific information for enterprise customers
11. **Footer**: Additional links and company information

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd metafrazo/frontend
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Start development server
   ```
   npm run dev
   # or
   yarn dev
   ```
   The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Build for Production

```
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## 🚢 Deployment

The project includes a `Procfile` which indicates it's configured for deployment on platforms like Heroku. The build process generates static files that can be deployed to any static hosting service.

## ✨ Performance Optimization

- **Lazy Loading**: Components are loaded only when needed
- **Optimized Assets**: Images and other assets are optimized for web
- **Modern JavaScript**: Uses ES modules for better tree-shaking and smaller bundle size
- **CSS Optimization**: TailwindCSS helps reduce unused CSS in production

## 🔒 Browser Support

The landing page is built with modern web standards and supports all major browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

[Your chosen license information]
