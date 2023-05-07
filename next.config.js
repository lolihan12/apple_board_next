/** @type {import('next').NextConfig} */
// topLevelAwait -> node18이상에서만 사용가능
const nextConfig = {
    experimental: {
      appDir: true,
    },
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true }
      return config
    }
  }
module.exports = nextConfig
