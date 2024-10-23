// next.config.mjs
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '', // リポジトリ名を削除
  assetPrefix: '', // リポジトリ名を削除
    images: { unoptimized: true } ,
    trailingSlash: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false };
      return config;
    }
  }
  
  export default nextConfig;