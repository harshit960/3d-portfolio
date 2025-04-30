---
title: The Tea Project
date: '2023-04'
description: Learn how to set up a new project with Next.js and TypeScript for building modern web applications.
author: Harshit Raj
tags: [Tea Tourism, Tourism Platform, React, Travel, Accommodation, Marketplace, Maps, Sustainable Tourism]
image: https://images.unsplash.com/photo-1491497895121-1334fc14d8c9
---

# 🍵 Tea Tourism Platform

A comprehensive platform connecting tea enthusiasts with authentic tea experiences around the world. This project consists of a feature-rich React-based frontend and a robust Node.js/Express backend to provide a complete tea tourism ecosystem.

![Tea Tourism](./Tea-Tourism-Landing-Page/public/assets/tea-pattern-white.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
- [Backend](#backend)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Tea Tourism is a platform designed to connect travelers with authentic tea experiences in various tea-growing regions. The platform provides information about tea estates, accommodations, transportation options, educational resources, and marketplace features for purchasing tea products and related items.

Our mission is to promote sustainable tourism that benefits local tea communities while providing visitors with unforgettable experiences. Through education, cultural exchange, and responsible travel, we're building bridges between tea lovers and the places where their favorite beverages are grown.

## 🎯 Key Features

- **Accommodation Booking**: Browse and book stays in tea estates, from luxury resorts to homestays
- **Transportation Planning**: Explore transportation options specific to tea regions
- **Educational Resources**: Access courses and resources about tea cultivation, processing, and culture
- **Marketplace**: Purchase authentic tea products and handicrafts from tea regions
- **Blog & Reviews**: Read and share experiences through blogs and reviews
- **Interactive Maps**: Navigate tea regions with detailed maps
- **Expert-led Courses**: Learn from industry specialists about tea farming, processing, and tourism

## 🏗 Project Structure

The project is organized into two main components:

```
Tea-Tourism-Project/
├── Tea-Tourism-Landing-Page/  # React frontend application
└── Tea-Tourism-Backend/       # Node.js backend services
    ├── server/                # Main API server
    └── data-plot-server/      # Data visualization service
```

## 💻 Frontend

The frontend is built with React and Vite, featuring a responsive design with Tailwind CSS for styling. Key sections include:

- **Home**: Introduction to tea tourism with featured experiences
- **Stay**: Accommodation options in various tea regions
- **Transport**: Transportation options and interactive maps
- **Courses**: Educational resources and expert-led courses
- **Products**: Marketplace for tea and related products
- **Blogs**: Articles about tea culture, travel experiences, and guides

### Installation

```bash
cd Tea-Tourism-Landing-Page
npm install
npm run dev
```

The application will be accessible at `http://localhost:5173`

## 🔧 Backend

The backend consists of multiple services:

### 1. Main API Server

Handles authentication, blog management, accommodations, transportation, marketplace, and reviews.

```bash
cd Tea-Tourism-Backend/server
npm install
npm run dev
```

The server will run on `http://localhost:5000`

### 2. Data Plotting Server

Specialized service for data collection and visualization.

```bash
cd Tea-Tourism-Backend/data-plot-server
npm install
node server.js
```

This service runs on a separate port (default: 5000)

### 3. Educational Resource API

Manages educational resources categorized by difficulty levels.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/TheTeaProject.git
cd TheTeaProject
```

2. Install backend dependencies and start the server:
```bash
cd Tea-Tourism-Backend/server
npm install
# Create a .env file with your MongoDB URI, JWT secret, and other configurations
npm run dev
```

3. Install frontend dependencies and start the development server:
```bash
cd ../../Tea-Tourism-Landing-Page
npm install
npm run dev
```

4. Access the application at `http://localhost:5173`

## 📚 API Documentation

The backend provides comprehensive APIs for various features:

### Authentication
- User registration and login
- JWT-based authentication

### Blogs
- Create, read, update, and delete blog posts
- Filter by tags, categories
- Featured blog management

### Accommodations
- Search and filter accommodations by location, type, price
- Tea-related accommodations
- Reviews and ratings
- Booking inquiries

### Transportation
- Transportation options by region
- Booking services

### Marketplace
- Product listings
- Shopping cart functionality
- Order management
- Product reviews

### Educational Resources
- Course management
- Resource categorization by difficulty level

Complete API documentation is available in the `server/examples` directory:
- `blog-api-examples.md`
- `stays-api-examples.md`
- `transport-api-examples.md`
- `marketplace-api-examples.md`

## 💾 Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- GSAP
- Locomotive Scroll

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Multer (file uploads)

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.