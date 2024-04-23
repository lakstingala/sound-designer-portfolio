/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_HOST: process.env.DB_HOST,
        apiKey: process.env.apiKey,
    },
};

export default nextConfig;