/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    i18n,
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: '127.0.0.1',
            // port: '',
            // pathname: '/account123/**',
        }, ],
    },

}

module.exports = nextConfig