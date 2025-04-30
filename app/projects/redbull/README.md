---
title: Project-Redbull
date: '2024-05'
description: Project-Redbull is an immersive and animated promotional website for Red Bull, built with React, Vite, Three.js, and GSAP, featuring interactive 3D models, smooth scrolling, and a responsive design to showcase the brand and its products.
author: Harshit Raj
tags: [Three.js, GSAP, Framer Motion, TailwindCSS, 3D, Animation, Interactive Website, Red Bull, Frontend]
image: https://images.unsplash.com/photo-1662948348853-ae7de7300e5e
---

# Project-Redbull - Interactive Red Bull Website

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.164.1-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square&logo=greensock)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2.12-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

An immersive, animated Red Bull promotional website featuring 3D models, smooth scrolling effects, and interactive elements to showcase Red Bull products and brand identity.

![Project Screenshot](public/redbull-1.png)

## 🔴 Live Demo

[View Live Site](https://your-demo-link-here.com) *(Replace with your actual deployment link)*

## ✨ Features

- **Interactive 3D Model** - Rotating Red Bull can using Three.js
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices
- **Loading Screen** - Custom loader with progress indicator
- **Modern UI** - Clean, bold aesthetics matching Red Bull's brand identity
- **Product Showcase** - Dedicated sections for displaying different flavors and products
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **3D Rendering**: Three.js
- **Animation Libraries**:
  - GSAP (GreenSock Animation Platform)
  - Framer Motion
- **Styling**:
  - TailwindCSS
  - CSS Modules
- **Smooth Scrolling**:
  - Locomotive Scroll
  - Lenis
- **Icons**: React Icons

## 🧩 Project Structure

```
project-redbull/
├── public/               # Static assets
│   ├── redbull.glb       # 3D model for Three.js
│   ├── *-star.png        # Star graphics 
│   └── ...               # Other images and fonts
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx     # About section
│   │   ├── Energy.jsx    # Energy drink information
│   │   ├── Flavors.jsx   # Product flavors showcase
│   │   ├── Homepage.jsx  # Main landing page
│   │   ├── Loader.jsx    # Loading screen
│   │   ├── Three.jsx     # 3D model integration
│   │   └── ...           # Other components
│   ├── styles/           # CSS modules and styles
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point
└── ...                   # Config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/project-redbull.git
cd project-redbull
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 📱 Responsive Design

The website is fully responsive across different screen sizes:
- **Mobile**: Optimized layout with adjusted 3D model scaling
- **Tablet**: Mid-sized layout with appropriate spacing
- **Desktop**: Full experience with large 3D models and animations

## ⚡ Performance Optimizations

- Lazy loading of assets
- Optimized 3D model rendering
- Efficient animation triggering based on scroll events
- Smooth scrolling implementation

## 🌟 Key Components

### Three.js Integration

The project features a 3D Red Bull can model that rotates and scales based on scroll position and device size:

- Dynamic resizing for different viewport widths
- GSAP animations tied to scroll events
- Transparent background for seamless integration with the website

### Animation System

Powerful animations are implemented using:
- GSAP for scroll-triggered animations
- ScrollTrigger for advanced scroll-based effects
- Framer Motion for interactive UI elements

### Product Showcase

The Flavors component displays various Red Bull products with:
- Interactive hover effects
- Animated transitions between products
- Responsive grid layout

## 🔮 Future Enhancements

- [ ] Add e-commerce functionality
- [ ] Implement product filter and search
- [ ] Create user accounts and preferences
- [ ] Add multilingual support
- [ ] Integrate social media sharing

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- Your Name - [GitHub Profile](https://github.com/your-username)

## 🙏 Acknowledgements

- Red Bull for brand inspiration
- Three.js community for 3D rendering guidance
- GSAP forum for animation assistance

---

*Note: This is a demo project for portfolio purposes and is not affiliated with Red Bull GmbH.*
