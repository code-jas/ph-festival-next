/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.resolve.modules.push(new URL('./src', import.meta.url).pathname);
      return config;
    },
  };
  
  export default nextConfig;
  