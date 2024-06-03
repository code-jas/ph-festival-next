/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.resolve.modules.push(new URL('./src', import.meta.url).pathname);
      return config;
    },
    images: {
      domains: ['fontmeme.com','firebasestorage.googleapis.com'],
    },
  };
  
  export default nextConfig;
  