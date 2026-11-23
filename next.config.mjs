/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Libera imagens HTTPS de qualquer domínio da API
            },
        ],
    },
};

export default nextConfig;