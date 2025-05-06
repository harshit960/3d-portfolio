/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.unsplash.com','plus.unsplash.com','harshit-delta.vercel.app','randomuser.me'],
    }
}

module.exports = nextConfig
