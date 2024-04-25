/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    env: {
        apiKey: process.env.apiKey,
    },
};

export default nextConfig;