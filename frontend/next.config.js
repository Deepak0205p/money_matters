/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    unoptimized: true,
  },

  devIndicators: false,

  turbopack: {},

  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /mvpppp/,
    };
    return config;
  },
};

export default nextConfig;
