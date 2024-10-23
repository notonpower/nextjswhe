// next.config.mjs
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/nextjswhe',
    assetPrefix: '/nextjswhe/',
    trailingSlash: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false };
      return config;
    }
  }
  
  export default nextConfig;