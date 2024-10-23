// next.config.mjs
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ドメインがwherewear.jpの場合、basePath不要
  // basePath: '/nextjswhe', // ← これを削除
  // assetPrefix: '/nextjswhe/', // ← これも削除
  trailingSlash: true,
}

export default nextConfig;