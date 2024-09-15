/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ "images.microcms-assets.io"],
        loader: 'default',
        path: '/_next/image',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 600],
        disableStaticImages: true,
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'microcms-assets.io',
                pathname: '/assets/'
            },
        ],
    }
};

export default nextConfig;
