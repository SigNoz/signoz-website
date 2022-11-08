const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  trailingSlash: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  generateEtags: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right"
  },
  optimizeFonts: true,
  experimental: {
    optimisticClientCache: true,
  }
});

module.exports = nextConfig;
