/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/all-topics',
                permanent: true,
            },

        ];
    },
};

export default nextConfig;