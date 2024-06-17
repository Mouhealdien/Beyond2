/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const nextConfig = {
    swcMinify: true,
    typescript: {

        ignoreBuildErrors: true,
    },

    reactStrictMode: true,
    i18n,
    images: {
        remotePatterns: [{
                protocol: 'http',
                hostname: '127.0.0.1',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'efac-5-193-21-208.ngrok-free.app',
                // port: '',
                // pathname: '/account123/**',
            }
        ],
    },

}

module.exports = nextConfig