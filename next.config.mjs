/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'radstore.pk',
            
          },
        ],
      },
};

export default nextConfig;
