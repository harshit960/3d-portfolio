---
title: BeatsNotFound
date: '2025-04'
description: A terminal-style music application that creates personalized Spotify playlists.
author: Harshit Raj
tags: ['Node.js', 'GenAI', 'Socket.io']
image: https://images.unsplash.com/photo-1470225620780-dba8ba36b745?
---


# beatsnotfound

![beatsnotfound Logo](https://via.placeholder.com/150x150?text=Moodify)

A terminal-style music application that creates personalized Spotify playlists based on your mood using AI. beatsnotfound combines the power of Spotify's API with Google's Gemini AI to deliver a unique music experience.

## 🌟 Features

- **Terminal Interface**: Retro-style terminal UI for a nostalgic computing experience
- **Spotify Integration**: Connect with your Spotify account to access your music library
- **AI-Powered Playlist Creation**: Generate playlists based on your mood using Gemini AI
- **Real-time Communication**: Socket.IO for seamless real-time interactions with per-user chat history
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React**: UI library for building the user interface
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Socket.IO Client**: Real-time communication with the server

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **Socket.IO**: Real-time bidirectional event-based communication with user session management
- **Google Generative AI**: AI-powered playlist generation using Gemini 2.0
- **Spotify Web API**: Access to Spotify's music data
- **Helmet**: Security middleware
- **Rate Limiting**: Protection against brute force attacks

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Spotify Developer Account
- Google AI API Key

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/harshit960/beatsnotfound.git
cd beatsnotfound
```

### Environment Setup

#### Backend (.env)

Create a `.env` file in the server directory with the following variables:

```
PORT=5000
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:5000/callback
CLIENT_URL=http://localhost:3000
```

#### Frontend (.env)

Create a `.env` file in the client directory with the following variable:

```
VITE_API_URL=http://localhost:5000
```

### Installation

#### Backend

```bash
cd server
npm install
npm run dev
```

#### Frontend

```bash
cd client
npm install
npm run dev
```

## 💻 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Type `login` in the terminal to authenticate with Spotify
3. Once logged in, you can interact with the AI by typing your mood or preferences
4. The AI will generate a personalized playlist based on your input
5. The playlist will be created in your Spotify account

## 🔒 Security Considerations

- Store sensitive API keys in environment variables
- Use HTTP-only cookies for token storage in production
- Implement rate limiting to prevent abuse
- Use Helmet for security headers
- Validate all user inputs
- Separate chat histories per user session

## 🚀 Deployment

### Backend Deployment

1. Set up a server (e.g., Heroku, DigitalOcean, AWS)
2. Configure environment variables
3. Build and deploy the application:

```bash
cd server
npm install
npm start
```

### Frontend Deployment

1. Build the frontend application:

```bash
cd client
npm run build
```

2. Deploy the built files to a static hosting service (e.g., Netlify, Vercel, GitHub Pages)

## 📝 API Documentation

### Socket.IO Events

#### Client to Server
- `chat_message`: Send a message to the AI
- `login_request`: Request Spotify authentication

#### Server to Client
- `chat_response`: Receive AI response
- `login_success`: Authentication successful
- `chat_error`: Receive error messages
- `login_request`: Trigger login flow
- `login_url`: Receive Spotify authentication URL

### REST Endpoints

- `GET /user-data`: Get user's Spotify data
- `GET /login`: Initiate Spotify authentication
- `GET /callback`: Spotify authentication callback
- `GET /refresh_token`: Refresh Spotify access token
- `GET /api/health`: Check server health status

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
6. Send mail at raj.harshit960@gmail.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Google Generative AI](https://ai.google.dev/)
- [Socket.IO](https://socket.io/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 