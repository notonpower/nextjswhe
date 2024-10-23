const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    deviceSizes: [320, 420, 768, 1024, 1200], // レスポンシブ画像サイズを設定
  }
}

export default nextConfig;