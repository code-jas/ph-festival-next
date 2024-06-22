/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   webpack(config) {
      config.resolve.modules.push(new URL('./src', import.meta.url).pathname);
      return config;
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'fontmeme.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            pathname: '**',
         },
      ],
      // domains: ['fontmeme.com', 'firebasestorage.googleapis.com'],
   },
};

export default nextConfig;
