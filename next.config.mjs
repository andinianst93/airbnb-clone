/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.clerk.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.supabase.co',
            port: '',
          }
        ],
      },
};  

export default nextConfig;
