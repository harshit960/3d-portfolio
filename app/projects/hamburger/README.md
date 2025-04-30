---
title: Anton
date: '2023-05-15'
description: Learn how to set up a new project with Next.js and TypeScript for building modern web applications.
author: Harshit Raj
tags: ['Next.js', 'TypeScript', 'Web Development', 'React']
image: https://images.unsplash.com/photo-1743993330456-6fa7a903b3bd
---

# 3D Hamburger Viewer

![3D Hamburger Viewer](https://img.shields.io/badge/3D-Hamburger%20Viewer-orange)
![Three.js](https://img.shields.io/badge/Three.js-r160-brightgreen)
![Vite](https://img.shields.io/badge/Vite-v5.0.8-blue)

An interactive 3D hamburger viewer built with Three.js and Vite. This project displays a 3D hamburger model that rotates dynamically as you move your mouse across the screen, along with a custom animated cursor.

## Features

- 3D hamburger model visualization using Three.js
- Interactive model rotation that follows mouse movement
- Custom animated cursor with hover effects
- Responsive design that works across different screen sizes
- Built with Vite for fast development and optimized production builds

## Demo

*Add screenshot or GIF of your hamburger model here*

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

## Installation

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd hamburger
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Project Structure

```
├── public/             # Static assets
│   ├── scene.glb       # 3D model (glb format)
│   ├── scene.gltf      # 3D model (gltf format)
│   └── vite.svg        # Vite logo
├── index.html          # Main HTML file
├── main.js             # Main JavaScript entry point
├── counter.js          # Counter component
├── style.css           # CSS styles
├── package.json        # Project dependencies
└── README.md           # This file
```

## Technology Stack

- [Three.js](https://threejs.org/) - 3D graphics library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) - For loading 3D models

## Controls

- Mouse movement: Rotates the hamburger model
- Cursor: Features custom animation on hover and click

## Credits

- 3D Hamburger Model: "Cute Hamburger - Free 3D Model"

## License

Check the license information in the included `cute_hamburger_-_free_3d_model/license.txt` file for details about the 3D model usage rights.

## Author

*Your Name*

---

Made with ❤️ and JavaScript